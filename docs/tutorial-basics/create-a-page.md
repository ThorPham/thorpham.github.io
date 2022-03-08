---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

```py
@dataclass
class MySQLConfig:
    host: str = "localhost"
    port: int = 3306

@dataclass
class Config:
    db: MySQLConfig = MySQLConfig()
    verbose: bool = True

cfg_store = ConfigStore.instance()
cfg_store.store(name="config", node=MyConfig)

@hydra.main(config_name="config")
def my_app(cfg: MyConfig) -> None:
    # Python knows that the type of cfg.db is MySQLConfig without any additional hints
    print(f"Host: {cfg.db.host}, port: {cfg.db.port}")

if __name__ == "__main__":
    my_app()
```

```py
import React from 'react';
norm_abalone_model = tf.keras.Sequential([
  normalize,
  layers.Dense(64),
  layers.Dense(1)
])

norm_abalone_model.compile(loss = tf.losses.MeanSquaredError(),
                           optimizer = tf.optimizers.Adam())

norm_abalone_model.fit(abalone_features, abalone_labels, epochs=10)
```
A new page is now available at `http://localhost:3000/my-markdown-page`.
