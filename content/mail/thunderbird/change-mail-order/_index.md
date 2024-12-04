+++
date = "2024-12-02T13:58:09+01:00"
title = "Thunderbird"
draft = false
slug = "change-mail-default-order"
categories = [ ]
+++

In the **Settings**, search for `Config Editor` and click the button *Config Editor...*

There search for `mailnews.default` and from the results change the following:

```bash
Preference Name                      Value
mailnews.default_news_sort_order:    x
mailnews.default_news_sort_type:     y
mailnews.default_sort_order:         x
mailnews.default_sort_type:          y
```

> to change the value double-click it or use the pencil button at the end of the row

Where for **x** choose one of the following [(documentation)](https://developer.mozilla.org/en/nsMsgViewSortOrder):

```bash
1 = Ascending
2 = Descending
```

And for **y** choose one of the following [(documentation)](https://developer.mozilla.org/en/nsMsgViewSortType):

```bash
17 = None
18 = Date
19 = Subject
20 = Author
21 = ID (Order Received)
22 = Thread
23 = Priority
24 = Status
25 = Size
26 = Flagged
27 = Unread
28 = Recipient
29 = Location
30 = Label
31 = Junk Status
32 = Attachments
33 = Account
34 = Custom
35 = Received
```

> so if you want to sort all mail by descending date set the values as follows:

```bash
mailnews.default_sort_order:    2
mailnews.default_sort_type:     18
```

[source](https://superuser.com/a/13551)
