+++
date = "2024-12-02T14:45:10+01:00"
draft = false
title = "Set Default Language"
slug = "set-default-language"
+++

Go to your neovim configuration folder, based on your os will be in one of the following path:

### Windows

```cmd
%USERPROFILE%\AppData\Local\nvim
```

### Linux / MacOS

```bash
~/.config/nvim
```

Inside this folder create, if not already present, the `init.lua` file and add/change the following command:

```lua
vim.cmd("language en_US")
```

For other languages, change the _**en_US**_ to your preferred locale
> [!Note]
> If I wanted to set It in Italian, I would write `vim.cmd("language it_IT")`

If you're unsure about your locale code, you can find it in this [wikipedia page](https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes)

[source](https://vi.stackexchange.com/questions/14429/why-is-my-neovim-not-in-english-and-how-do-i-force-it-to-be)