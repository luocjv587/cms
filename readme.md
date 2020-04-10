# 基于PJ Blog 的信息聚合网站

功能新增

1.目前每日自动爬知乎日报

地址:http://blog.luochenjie.com/


# PJ Blog

This is a powerful blog, I try to build the blog more beautiful, more convenient. 

`Laravel 5.*` and `Vuejs 2.*` combined with the establishment of a good response and quickly dashboard, the dashboard made through the `Vuejs` component development.

I believe it will be better and better. If you are interested in this, you can join and enjoy it.

Here is [documents](https://manual.pigjian.com/)

[Example](http://example.pigjian.com)


## Install

### 1. Clone the source code or create new project.

```shell
git clone https://github.com/jcc/blog.git
```

OR

```shell
composer create-project jcc/blog
```

### 2. Set the basic config

```shell
cp .env.example .env
```

Edit the `.env` file and set the `database` and other config for the system after you copy the `.env`.example file.

### 2. Install the extended package dependency.

Install the `Laravel` extended repositories: 

```shell
composer install -vvv
```

Install the `Vuejs` extended repositories: 

```shel
npm install
```

Compile the js code: 

```shel
npm run dev

// OR

npm run watch

// OR

npm run production
```

### 3. Run the blog install command, the command will run the `migrate` command and generate test data.

```shell
php artisan blog:install
```

## Contributors

- [Jiajian Chan](http://github.com/jcc)

## Thanks

- [overtrue](https://github.com/overtrue)
- [Laravist](https://www.laravist.com/)
- [Laravel - China](https://laravel-china.org/)

## Donate

Support all ERC20 tokens. My Address:
**0x600dfF1311E5DA3a8697fD86d4Fd9bed257395eb**

## License

The project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).


