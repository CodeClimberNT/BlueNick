+++
date = "2024-12-02T15:01:41+01:00"
draft = false
title = "Scp"
slug = "cli/scp"
+++

Considering two system: `System A` and `System B`. You are logged inside one of them.
Consider this rule for copying file(s) between ssh

`scp <source> <destination>`

The system you are NOT logged into will prepend `username@system_name:` to the absolute path

So If you want to copy some files `System B ⇒ System A` while you are logged in System B, you have to prepend in the `<destination>` parameter

thus resulting in a command like this 
`scp /path/to/file username@system_name:/path/to/destination`

Of course, if you want to copy an entire folder, just use the -r flag
`scp -r /path/to/folder username@system_name:/path/to/destination`

[source](https://www.freecodecamp.org/news/scp-linux-command-example-how-to-ssh-file-transfer-from-remote-to-local/)

{{< comments-invitation >}}