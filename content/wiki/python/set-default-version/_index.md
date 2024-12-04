+++
date = "2024-12-02T14:38:21+01:00"
draft = false
title = "Set Default Version"
slug = "set-default-version"
keywords = [ ]
+++

## Windows Solution

### Locate the Python Launcher folder

Usually at:

```powershell
C:\Users\[USERNAME]\AppData\Local\Programs\Python\Launcher
```

Where *[USERNAME]* is your username folder in Windows.

Inside the Launcher folder you should see a structure similare to this:
{{< filetree/container >}}
  {{< filetree/folder name="Launcher" >}}
  {{< filetree/file name="py.exe" >}}
  {{< filetree/file name="pyw.exe" >}}
  {{< /filetree/folder  >}}
{{< /filetree/container >}}

### Create two additional files

Create two additional files named `py.ini` and `pyw.ini`, so that in that folder you should have at least those files:

{{< filetree/container >}}
  {{< filetree/folder name="Launcher" >}}
  {{< filetree/file name="py.exe" >}}
  {{< filetree/file name="py.ini" >}}
  {{< filetree/file name="pyw.exe" >}}
  {{< filetree/file name="pyw.ini" >}}
  {{< /filetree/folder  >}}
{{< /filetree/container >}}

Now inside **py.ini** and **pyw.ini** paste the following lines:

```toml
[defaults]
python=3.12
```

Where the value (this case **3.12**) is the preferred python version you'd like to use

[source](https://stackoverflow.com/questions/68121982/multiple-python-versions-installed-how-to-set-the-default-version-for-py-exe)
