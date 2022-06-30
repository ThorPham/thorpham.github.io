--- 
slug : Tìm-hiểu-về-thư-viện-keras-trong-deep-learning
title : Tìm hiểu về thư viện keras trong deep learning
authors : thorpham
tags : [python,Keras]
---
Keras là một library được phát triển vào năm 2015 bởi François Chollet, là một kỹ sư nghiên cứu deep learning tại google. Nó là một open source cho neural network được viết bởi ngôn ngữ python. keras là một API bậc cao có thể sử dụng chung với các thư viện deep learning nổi tiếng như tensorflow(được phát triển bởi gg), CNTK(được phát triển bởi microsoft),theano(người phát triển chính Yoshua Bengio). keras có một số ưu điểm như :
* Dễ sử dụng,xây dựng model nhanh.
* Có thể run trên cả cpu và gpu
* Hỗ trợ xây dựng CNN , RNN và có thể kết hợp cả 2.*
<!--truncate-->
## Cách cài đặt :
Trước khi cài đặt keras bạn phải cài đặt một trong số các thư viện sau tensorflow,CNTK,theano. Sau đó bạn có thể cài đặt bằng 1 số lệnh sau đối với window:
* pip install keras
* conda install keras
  
## Tìm hiểu cấu trúc của Keras
Cấu trúc của keras chúng ta có thể chia ra thành 3 phần chính :
<!-- ![keras0](/assets/images/keras0.jpg) -->
 <center>
   <img width="600" height="300" src={require('./keras0.jpg').default} />
</center>

### Đầu tiền là các module dùng để xây dựng bộ xương cho model :
   
<!-- ![keras1](/assets/images/keras1.jpg) -->
 <center>
   <img width="600" height="300" src={require('./keras1.jpg').default} />
</center>

Đầu tiên ta tìm hiểu sub-module : Models trong keras. Để khởi tạo một model trong keras ta có thể dùng 2 cách:
1. Cách 1 : Thông qua  Sequential như ví dụ dưới. Chúng ta khởi tạo model bằng `Sequential` sau đó dùng method add để thêm các layer.
```py
import numpy as np
from keras.models import Sequential,Model

model = Sequential()
model.add(Conv2D(32, kernel_size=(3, 3),
                 activation='relu',
                 input_shape=input_shape))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dense(num_classes, activation='softmax'))

model.compile(loss=keras.losses.categorical_crossentropy,
              optimizer=keras.optimizers.Adadelta(),
              metrics=['accuracy'])

model.fit(x_train, y_train,
          batch_size=batch_size,
          epochs=epochs,
          verbose=1,
          validation_data=(x_test, y_test))
```

2. Cách thứ 2 để khởi tạo model là dùng function API . Như ví dụ dưới
```py
from keras.models import Model
from keras.layers import Input, Dense

a = Input(shape=(32,))
b = Dense(32)(a)
model = Model(inputs=a, outputs=b)
```

* Nó cũng tương tự như computation graph, chúng ta xem input cũng là một layer sau đó build từ input tới output sau đó kết hợp lại bằng hàm  `Model`. Ưu điểm của phương pháp này có thể tùy biến nhiều hơn,giúp ta xây dựng các model phức tạp nhiều input và output.
* Khi chúng ta khởi tạo một model thì có các method ta cần lưu ý là :
* `compile` : Sau khi build model xong thì compile nó có tác dụng biên tập lại toàn bộ model của chúng ta đã build. Ở đây chúng ta có thể chọn các tham số để training model như : thuật toán training thông qua tham số `optimizer`, function loss của model chúng ta có thể sử dụng mặc định hoặc tự build thông qua tham số `loss`, chọn metrics hiện thị khi model được training
* `summary` method này giúp chúng ta tổng hợp lại model xem model có bao nhiêu layer, tổng số tham số bao nhiêu,shape của mỗi layer..
* `fit` dùng để đưa data vào training để tìm tham số model(tương tự như sklearn)
* `predict` dùng để predict các new instance
* `evaluate` để tính toán độ chính xác của model
* `history` dùng để xem accuracy,loss qua từng epochs . Thường dùng với matplotlib để vẽ chart.
  
Tiếp theo chúng ta tìm hiểu đên sub-module Layers : Nó chứa các layers chuyên dụng để ta build các model như CNN,RNN,GANs..Có rất nhiều layers nên ta chỉ quan tâm đến một số layer thường sử dụng.
<!-- ![keras2](/assets/images/keras2.jpg) -->
 <center>
   <img width="600" height="300" src={require('./keras2.jpg').default} />
</center>

Core layer : chứa các layer mà hầu như model nào cũng sử dụng đến nó.
* `Dense` layer này sử dụng như một layer neural network bình thường. Các tham số quan tâm.
  * `units` chiều output
  * `activation` dùng để chọn activation.
  * `input_dim` chiều input nếu là layer đầu tiên
  * `use_bias` có sử dụng bias ko,true or false
  * `kernel_initializer` khởi tạo giá trị đầu cho tham số trong layer trừ bias
  * `bias_initializer` khởi tạo giá trị đầu cho bias
  * `kernel_regularizer` regularizer cho coeff
  * `bias_regularizer` regularizer cho bias
  * `activity_regularizer` có sử dụng regularizer cho output ko
  * `kernel_constraint`,`bias_constraint` có ràng buộc về weight ko
* `Activation` dùng để chọn activation trong layer(có thể dùng tham số activation thay thế).Xem phần sau.
* `Dropout` layer này dùng như regularization cho các layer hạn chế overfiting. Tham số cần chú ý :
  * `rate` tỉ lệ dropout
  * `noise_shape` cái này chưa tìm hiểu
  * `seed` random seed bình thường
* `Flatten` dùng để lát phằng layer để fully connection, vd : shape : 20x20 qua layer này sẽ là 400x1
* `Input` layer này sử dụng input như 1 layer như vd trước ta đã nói.
* `Reshape` giống như tên gọi của nó, dùng để reshape
* `Lambda` dùng như lambda trong python thôi ha
* Convolutional Layers: chứa các layer trong mạng nơ ron tích chập . `Conv1D`,`Conv2D` là convolution layer dùng để lấy feature từ image. tham số cần chú ý:
  * `filters` số filter của convolution layer
  * `kernel_size` size window search trên image
  * `strides` bước nhảy mỗi window search
  * `padding` same là dùng padding,valid là ko
  * `data_format` format channel ở đầu hay cuối
* `UpSampling1D`,`UpSampling2D` Ngược lại với convolution layer
  * `size` vd (2,2) có nghĩa mỗi pixel ban đầu sẽ thành 4 pixel
  * `ZeroPadding1D`,`ZeroPadding2D` dùng để padding trên image.
  * `padding` số pixel padding 
* Pooling Layers : Chứa các layer dùng trong mạng CNN.
  * `MaxPooling1D`,`MaxPooling2D` dùng để lấy feature nổi bật(dùng max) và giúp giảm parameter khi training
  * `pool_size` size pooling
  * `AveragePooling1D`,`AveragePooling2D` giống như maxpooling nhưng dùng Average
* `GlobalMaxPooling1D`,`GlobalMaxPooling2D` chưa dùng bao giờ nên chưa hiểu nó làm gì
* Recurrent Layers chứa các layers dùng trong mạng RNN
  * `RNN` layer RNN cơ bản
  * `GRU` khắc phục hạn chế RNN tránh vanish gradient.
  * `LSTM` Long Short-Term Memory layer
* Embedding layer : `Embedding` dùng trong nhiều trong nlp mục đích embbding sang một không gian mới có chiều nhỏ hơn, và dc learning from data thay cho one-hot lad hard code.
  * `input_dim` size của vocabulary
  * `output_dim` size của word embbding
  * `input_length` chiều dài mỗi sequence
* Merge Layers chứa các layers giúp chúng ta cộng,trừ,hoặc nối các layer như các vector vậy :
  * `Add` cộng các layers
  * `Subtract`trừ các layers
  * `Multiply`nhân các layer
  * `Average` tính trung bình các layers
  * `Maximum` lấy maximun giữa các layers
  * `Concatenate` nối các layer
* `Dot` Nhân matrix giữ 2 layers
Own Keras layers : Giúp chúng ta có thể xây dựng layer như theo ý muốn, gồm 3 method chúng ta cần chú ý là `build`,`call` và `compute_output_shape`
  
```py
from keras import backend as K
from keras.engine.topology import Layer
import numpy as np

class MyLayer(Layer):

    def __init__(self, output_dim, **kwargs):
        self.output_dim = output_dim
        super(MyLayer, self).__init__(**kwargs)

    def build(self, input_shape):
        # Create a trainable weight variable for this layer.
        self.kernel = self.add_weight(name='kernel', 
                                      shape=(input_shape[1], self.output_dim),
                                      initializer='uniform',
                                      trainable=True)
        super(MyLayer, self).build(input_shape)  # Be sure to call this at the end

    def call(self, x):
        return K.dot(x, self.kernel)

    def compute_output_shape(self, input_shape):
        return (input_shape[0], self.output_dim)
```

### Tiếp theo chúng ta tìm hiểu đến tiền xử lý dữ liệu trong keras, nó được chia ra làm 3 phần :
* `Sequence Preprocessing` tiền xử lý chuỗi .
    * `TimeseriesGenerator` cái này dùng để tạo dữ liệu cho time series
    * `pad_sequences` dùng để padding giúp các chuỗi có độ dài bằng nhau
    * `skipgrams` tạo data trong model skip gram,kết quả trả về 2 tuple nếu word xuất hiện cùng nhau là 1 nếu ko là 0.
* `Text Preprocessing` tiền xử lý text
    * `Tokenizer` giống kỹ thuật tokenizer trong nlp, tạo tokenizer từ documment
    * `one_hot` tạo data dạng one hot encoding
    * `text_to_word_sequence` covert text thành sequence
* `Image Preprocessing` tiền xử lý image
    * `ImageDataGenerator` tạo thêm data bằng cách scale,rotation...
    
### Các function trong bộ xương của model
Các hàm `loss functions` thường dùng :
* `mean_squared_error` thường dùng trong regression tính theo eculic
* `mean_absolute_error` tính theo trị tuyệt đối
* `categorical_crossentropy` dùng trong classifier nhiều class
* `binary_crossentropy` dùng trong classifier 2 class
* `kullback_leibler_divergence` dùng để tính loss giữa phân phối thực tế và thực nghiệm
  
`metrics` nó là thước đo để ta đánh giá accuracy của model :
* `binary_accuracy` nếu y_true==y_pre thì trả về 1 ngược lại 0,dùng cho 2 class
* `categorical_accuracy` tương tự binary_accuracy nhưng cho nhiều class
  
`optimizers` dùng để chọn thuật toán training.
* `SGD` Stochastic gradient descent optimizer
* `RMSprop` RMSProp optimizer
* `Adam` Adam optimizer
  
`activations` để chọn activation function 
* `linear` như trong linear regression
* `softmax` dùng trong multi classifier
* `relu` max(0,x) dùng trong các layer cnn,rnn để giảm chi phí tính toán
* `tanh` range (-1,1)
* `Sigmoid` range (0,1) dùng nhiều trong binary class
  
Callbacks : khi model chúng ta lớn có khi training thì gặp sự cố ta muốn lưu lại model để chạy lại thì callback giúp t làm điều này :
* `ModelCheckpoint` lưu lại model sau mỗi epoch
* `EarlyStopping` stop training khi training ko cải thiện model
* `ReduceLROnPlateau` giảm learning mỗi khi metrics ko được cải thiện
  
Datasets. Keras hỗ trợ một số dataset theo công thức :
* `cifar100` gồm 50,000 32x32 color training images, labeled over 100 categories, and 10,000 test images.
* `mnist` data 70k image data hand written.
* `fashion_mnist` Dataset of 70k 28x28 grayscale images of 10 fashion categories
* `imdb` 25,000 movies reviews from IMDB, label đánh theo pos/neg
* `reuters` 11,228 newswires from Reuters, labeled over 46 topics
* `boston_housing` data giá nhà ở boston theo 13 features
  
```py
from keras.datasets import name_data
(X_train,X_test),(y_train,y_test) = name_data.load_data()
```
`Applications` chứa các pre-training weight của các model deep learning nổi tiếng.`Xception`,`VGG16`,`VGG19`,`resnet50`,`inceptionv3`,
`InceptionResNetV2`,`MobileNet`,`DenseNet`,`NASNet` cẩu trúc chung như sau :
* `preprocess_input` dùng để preprocessing input custom same với input của pretraining
* `decode_predictions` dùng để xem label predict
```py
from keras.applications.name_pre_train import Name_pre_train
from keras.applications.name_pre_train import preprocess_input, decode_predictions
model = Name_pre_train(weights='tên dataset')
```

`backends` banckend có nghĩa là thay vì keras xây dựng từ đầu các công thức từ đơn giản đến phức tạp, thì nó dùng những thư viện đã xây dựng sẵn rồi và dùng thôi. Giúp tiết kiệm dc thời gian và chí phí. Trong keras có hỗ trợ 3 backend là tensorflow,theano và CNTK.
`initializers` khởi tạo giá trị  weight của coeff và bias trước khi training lần lượt `kernel_initializer` and `bias_initializer`. mặc định là `glorot_uniform` phân phối uniform với giá trị 1/căn(input+output).
`regularizers` Dùng để phạt những coeff nào tác động quá mạnh vào mỗi layer thường dùng là L1 và L2
`constraints` dùng để thiết lập các điều kiện ràng buộc khi training
`visualization` giúp chúng ta plot lại cấu trúc mạng neral network.
`Utils` chứa các function cần thiết giúp ta xử lý data nhanh hơn.
`normalize` chuẩn hóa data theo L2
`plot_model` giúp chúng ta plot model 
`to_categorical` covert class sang binary class matrix
  
