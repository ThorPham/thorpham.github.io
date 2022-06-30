--- 
slug : Tìm-hiểu-eigenFace-trong-face-recognite
title : Tìm hiểu eigenFace trong face recognite
authors : thorpham
tags : [python,Face recognition]
---
*Có bao giờ bạn vào facebook rồi một ngày nọ có một thông báo hiện lên bạn được tag trong một bước ảnh nào đó. Đã bao giờ bạn nghĩ làm sao 
facebook nhận diện ra mặt bạn, mình cũng không biết nữa vì tất cả thuật toán của nó là điều bí mật. Tuy vậy vẫn có nhiều phương pháp nhận 
diện giương mặt đơn giản mà ta có thể thử. Bài này ta sẽ tìm hiểu về eigenface và cùng một model đơn giản với Opencv. Eigenface lấy ý tưởng đằng sau từ PCA, chắc cũng đã có nhiều người biết đến phương pháp này. PCA là một phương pháp giảm chiều dữ liệu, khi mà dữ liệu có chiều lớn mà chúng ta chỉ có thể visualize ở chiều nhỏ hơn 3 thì PCA sẽ là một phương pháp giúp ta đữa data về một không gian mới(ta gọi là PCA space) mà vẫn cố giữ lại được thông tin nhiều nhất có thể trên data.*
<!--truncate-->
Nội dung bài viết : 
1. Tìm hiểu về PCA
2. Tìm hiểu EigenFace
3. Build model

## 1. Tìm hiểu về PCA
PCA là một trong những phương pháp giảm chiều dữ liệu ( Dimensionality reduction techniques ) phổ biến nhất và được sử dụng trong nhiều lĩnh vực khác nhau. PCA có nhiều ứng dụng như tìm mối tương quan giữa các biến ( relationship between observation), trích xuất những thông
tin quan trọng từ data,phát hiện và loại bỏ outlier và giảm chiều chiều dữ liệu.Ý tưởng của phương pháp PCA là tìm ra một không gian mới
để chiếu(project) data sao cho variation giữ lại là nhiều nhất. Ta có thể hình dung qua hình vẽ dưới đây.

<!-- ![pca1](/assets/images/pca1.jpg) -->
<center>
   <img width="600" height="300" src={require('./pca1.jpg').default} />
</center>
Có 2 phương pháp tiếp cận PCA là covarian matrix và SVD chúng ta chỉ tìm hiểu về covarian matrix trong bài này .
Phương pháp Covarian matrix : Các bước thực hiện thuật toán như sau :

 <center>
   <img width="600" height="300" src={require('./pca.jpg').default} />
</center>

* X data có chiều MxN ( với N là số sample ,M là số feature).
* Tính mean của X :
$$
\mu = \frac{1}{N}\cdot\sum_{i=1}^{N}x_{i}
$$
* Trừ X với mean của X :
$$
D = \{d_{1},d_{2},..,d_{N}\} = \sum_{i=1}^{N}x_{i} - \mu
$$
* Tính toán covarian :

 $$
 \sum = \frac{1}{N-1}\cdot D\cdot D^{T}
 $$

* Tính toán EigenVector **V** và EigenValue $\lambda$ của Covarian $\sum$
* Sort EigenValue tương ứng với EigenVector theo thứ tự $\lambda$ giảm dần .
* Chọn những EigenVector tương ứng với EigenValue lớn nhất $ W = \{v_{1},v_{2},..v_{k}\} $ . EigenVector W sẽ làm đại diện để project X vào PCA space
* Tất cả sample X sẽ được project vào không gian nhỏ hơn theo công thưc $Y = W^{T}\cdot D$

Lưu ý về dimension cái biến :

 <center>
   <img width="600" height="300" src={require('./dimension.jpg').default} />
</center>

Xây dựng PCA space :
  * Để xây dựng không gian nhỏ hơn (từ M thành k), trong đó k là số eigen value mà ta chọn. Khi đó PCA space được định nghĩa là 
  $ W = \{v_{1},v_{2},..,v_{k}\} . Ta viết lại biến Y là project của X qua W như sau :
  $$
  Y = W_{T} \cdot D = \sum_{i=1}^{N}(x_{i} - \mu)
  $$
## Tìm hiểu EigenFace 
EigenFace Hiểu một cách đơn giản là nó dung PCA là feature extraction sau đó mới đưa vào model để training. Mỗi image có chiều chẳng hạn 28x28 = 784 pixel nếu đưa hết vào model thì có một số nhược điểm sau :
* Thời gian training lâu vì chiều dữ liệu lớn
* Không phải tất cả các vị trí trên image đều quan trọng
Vì vậy PCA giúp ta khắc phục các nhược điểm này , nó giúp ta giảm chiều dữ liệu mà vẫn giữ lại được những thông tin quan trọng trên image.
Các bước thực hiện thuật toán :
* Chuẩn bị dữ liệu : Face nên được alignment và có cùng kích thước NxN sau đó chuẩn hóa bằng cách chia 255.
* Image sau đó được Flatten thành 1xN^2 pixel, chúng ta có M image nên data sẽ có chiều MxN^2
* Sau đó chúng ta tính mean và tính toán covariance như ở thuật toán PCA ở trên
* Điểm khác biệt ở đây là covarian có chiều N^2xN^2 quá lớn để tính trực tiếp eigen vector và egien value nên có 1 cái trick ở đây đó
là người ta sẽ tính eigen vector của MxM( vì MxM có kích thước nhỏ hơn nhiều so với N^2xN^2). Sau đó tính ngược lại cho N^2xN^2
* Cuối cùng chọn số eigen vector để chiếu data sang không gian mới lấy nó là feature để training.
## Build model
Chúng ta có thể tự xây dựng model hoặc dùng thư viện có sẵn trong opencv chẳng hạn.Data set bộ data 2k image 12 ca sỹ việt nam đã aligment
Code với sklearn :
```py
import numpy as np
import os
import glob
import cv2

names = ["bao thy","chi pu","dam vinh hung","dan truong","ha anh tuan","ho ngoc ha",
         "huong tram","lam truong","my tam","No phuoc thing","son tung","tuan hung"]
name_index = {name:index for index,name in enumerate(names)}
index_name = {index:name for index,name in enumerate(names)}

label = []
data = []
for name in names :
    paths = glob.glob(".//" +name +"//*.png")
    for path in paths:
        image = cv2.imread(path,0)
        data.append(image.flatten())
        label.append(name_index[name])
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.decomposition import RandomizedPCA
from sklearn.metrics import accuracy_score

mean = np.mean(data,axis=0)
data_normal = data-mean
pca = PCA(n_components=100,svd_solver='randomized',whiten=True)
X = pca.fit_transform(data_normal)
==> split data to train and test
X_train,X_test, y_train,y_test = train_test_split(X,label,test_size=0.3,shuffle=True)
==> build model
svm = SVC(C=10)
svm.fit(X_train,y_train)
y_pre = svm.predict(X_test)
print(accuracy_score(y_test,y_pre))
```
Accuarcy chỉ có 62% thôi ha. Tương đối thấp vì PCA là 1 feature extraction dạng shadow learning nên feature chỉ làm việc tốt đối với
những image có sự khác biệt lớn về structer and texture như chó mèo.. Còn face thì khó hơn ta có thể dùng các kỹ thuật feature của deep learning để training. Bạn có thể đọc ở bài face veritication :
* Build với Opencv
* Tương đối đơn giản nên mình chỉ show gợi ý thôi :
* Đầu tiên khởi tạo model và training model như sau :
```py
recognizer = cv2.face.EigenFaceRecognizer_create()
recognizer.train(Faces,IDs)
```
Sau đó lưu file dưới dạng yml :`recognizer.save("recognier.yml")`
Cuối cùng là recognition realtime
```py
cascade = cv2.CascadeClassifier("haarcascade_frontalface_alt.xml")
 # Use urllib to get the image and convert into a cv2 usable format
image = cv2.imread("my_tam.png")
frame_gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
detection = cascade.detectMultiScale(frame_gray,scaleFactor=1.3,minNeighbors=5)
for (x,y,w,h) in detection:
    cv2.rectangle(image,(x,y),(x+w,y+h),(0,255,0),2)
    roi = frame_gray[y:y+h,x:x+w]
    roi = imutils.resize(roi,width=96,height=96)
    single = recognizer.predict(roi)[0]
    print(index_name[single])
    cv2.putText(image,index_name[single],(int(x),int(y-10)),cv2.FONT_HERSHEY_COMPLEX_SMALL,2,(0,0,255),2)
cv2.imshow("frame",image)
cv2.waitKey()
cv2.destroyAllWindows()
```
Tham khảo : http://blog.manfredas.com/eigenfaces-tutorial/,bài giảng computer vision của thầy Mubarak 

