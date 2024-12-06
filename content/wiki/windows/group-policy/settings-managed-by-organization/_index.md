+++
date = "2024-12-02T14:29:37+01:00"
draft = false
title = "Settings Managed by Organization"
slug = "settings-managed-organization"
+++

## Read Carefully

This kind of warning is caused by some group policy settings,
if you have a 3rd party antivirus installed on your PC
or a work or school account is linked to your PC perhaps for software installation,
first try removing one of those to understand what caused what.

Anyway, if you have neither work account linked nor 3rd party antivirus try using this guide, or simply you have not yet found the solution, you're welcome to continue reading.

{{< callout type="warning" >}}
   SINCE THE GUIDE IS MODIFYING THE REGISTRY, DO A SYSTEM RESTORE POINT TO MITIGATE THE RISK OF DAMAGE!
{{</ callout >}}

## Modify the registry using CMD as Admin

1. Click Start Button
2. type cmd
3. right-click the icon, then *run as Administrator*

Paste each of these commands into Command one at a time and press Enter, wait for each command to complete, before running the next command, if you receive an error on any command, ignore that and continue to the next command.

```cmd
reg delete "HKLM\Software\Microsoft\Windows\CurrentVersion\Policies" /f
reg delete "HKLM\Software\Microsoft\WindowsSelfHost" /f
reg delete "HKLM\Software\Policies" /f
reg delete "HKLM\Software\WOW6432Node\Microsoft\Policies" /f
reg delete "HKLM\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Policies" /f
reg delete "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v DisableAntiSpyware
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies" /f
reg delete "HKCU\Software\Microsoft\WindowsSelfHost" /f
reg delete "HKCU\Software\Policies" /f
reg delete "HKLM\Software\Microsoft\Policies" /f
```

Then, close Command Prompt and **restart** (***don't*** shut down) your PC.

[source](https://answers.microsoft.com/en-us/windows/forum/all/windows-11-some-of-these-settings-are-managed-by/d4cb2836-be2d-42c4-889f-6ece8c6de0e5)

{{< comments-invitation >}}