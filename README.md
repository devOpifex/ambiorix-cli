<div align="center">

# ambiorix-cli

<img src="https://ambiorix.dev/img/ambiorix.png" height = "200px"/>

Command line interface for [ambiorix](https://ambiorix.john-coene.com).

</div>

## Install

Install globally.

```bash
npm install ambiorix-cli -g
```

## Usage

Creates application skeleton in `myapp` directory, wraps the [generator](https://github.com/JohnCoene/ambiorix.generator)

```bash
ambiorix-cli create-basic myapp
ambiorix-cli create-bootstrap myapp
ambiorix-cli create-vue myapp
```

Starts & stop the application.

```bash
ambiorix-cli start
ambiorix-cli start 5000
ambiorix-cli stop
```

Add templates.

```bash
ambiorix-cli template-basic homepage
ambiorix-cli template-bootstrap homepage
```

Install R packages

```bash
ambiorix-cli install
ambiorix-cli install-generator
```
