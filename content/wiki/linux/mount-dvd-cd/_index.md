+++
date = "2024-12-02T14:58:21+01:00"
draft = false
title = "Mount DVD or CDs"
slug = "mount-dvd-cds"
+++

Just mount the disk as it was an external drive:

```bash
mount /media/cdrom
```

after you are done, unmount like normal

```bash
umount /media/cdrom
```

{{< callout type="info" >}}
   If `cdrom` doesn't work try `cdrecorder` or `dvdrecorder`
{{< /callout >}}

[source](https://www.cyberciti.biz/faq/mounting-cdrom-in-linux/)
