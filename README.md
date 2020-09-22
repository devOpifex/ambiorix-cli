<div align="center">

# ambiorix-cli

<img src="https://ambiorix.john-coene.com/_assets/ambiorix.png" height = "200px"/>

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
```

Starts & stop the application.

```bash
ambiorix-cli start
ambiorix-cli stop
```

Create template, defaults to HTML

```bash
ambiorix-cli template homepage
ambiorix-cli template homepage R
```

Install R packages

```bash
ambiorix-cli install
ambiorix-cli install-generator
```
