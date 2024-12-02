+++
date = "2024-12-02T14:38:21+01:00"
draft = true
title = "Set Default Version"
slug = "set-default-version"
keywords = [ ]
+++

## Windows Solution

locate the Python Launcher folder
> Usually at `C:\Users\[USERNAME]\AppData\Local\Programs\Python\Launcher`

Inside you should see a `py.exe` and a `pyw.exe`

Create two additional files named `py.ini` and `pyw.ini`, so that in that folder you should have at least those files:

* `py.exe`
* `py.ini`
* `pyw.exe`
* `pyw.ini`

Now inside **py.ini** and **pyw.ini** paste the following lines:

```toml
[defaults]
python=3.12
```

> In this case **3.12** is the preferred python version you'd like to use

[source](https://stackoverflow.com/questions/68121982/multiple-python-versions-installed-how-to-set-the-default-version-for-py-exe)
