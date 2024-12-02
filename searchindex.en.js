var relearn_searchindex = [
  {
    "breadcrumb": "Cli",
    "content": "Considering two system: System A and System B. You are logged inside one of them. Consider this rule for copying file(s) between ssh\nscp \u003csource\u003e \u003cdestination\u003e\nThe system you are NOT logged into will prepend username@system_name: to the absolute path\nSo If you want to copy some files System B ⇒ System A while you are logged in System B, you have to prepend in the \u003cdestination\u003e parameter\nthus resulting in a command like this scp /path/to/file username@system_name:/path/to/destination\nOf course, if you want to copy an entire folder, just use the -r flag scp -r /path/to/folder username@system_name:/path/to/destination\nsource",
    "description": "Considering two system: System A and System B. You are logged inside one of them. Consider this rule for copying file(s) between ssh\nscp \u003csource\u003e \u003cdestination\u003e\nThe system you are NOT logged into will prepend username@system_name: to the absolute path\nSo If you want to copy some files System B ⇒ System A while you are logged in System B, you have to prepend in the \u003cdestination\u003e parameter\nthus resulting in a command like this scp /path/to/file username@system_name:/path/to/destination",
    "tags": [],
    "title": "Scp",
    "uri": "/HowTo/cli/scp/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Cli",
    "uri": "/HowTo/cli/index.html"
  },
  {
    "breadcrumb": "Linux",
    "content": "Just mount the disk as it was an external drive:\nmount /media/cdrom after you are done, unmount like normal\numount /media/cdrom Note If cdrom doesn’t work try cdrecorder or dvdrecorder\nsource",
    "description": "Just mount the disk as it was an external drive:\nmount /media/cdrom after you are done, unmount like normal\numount /media/cdrom Note If cdrom doesn’t work try cdrecorder or dvdrecorder\nsource",
    "tags": [],
    "title": "Mount DVD or CDs",
    "uri": "/HowTo/linux/mount-dvd-cd/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Linux",
    "uri": "/HowTo/linux/index.html"
  },
  {
    "breadcrumb": "Docker \u003e Compose",
    "content": "Inside the folder where the docker compose file is located, enter the following command to download the new version of the image(s)\ndocker compose pull Then run the following command to recreate the container and starting it up detached from the terminal\ndocker compose up --force-recreate -d Note if you have made modification to the image, use also the --build command:\ndocker compose up --force-recreate --build -d Now, if you like to remove the old image from storage, run:\ndocker image prune -f Warning This command will remove all unused image -\u003e all images not used in running container!\nsource",
    "description": "Inside the folder where the docker compose file is located, enter the following command to download the new version of the image(s)\ndocker compose pull Then run the following command to recreate the container and starting it up detached from the terminal\ndocker compose up --force-recreate -d Note if you have made modification to the image, use also the --build command:",
    "tags": [],
    "title": "Update Images",
    "uri": "/HowTo/docker/compose/update-images/index.html"
  },
  {
    "breadcrumb": "Docker",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Compose",
    "uri": "/HowTo/docker/compose/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Docker",
    "uri": "/HowTo/docker/index.html"
  },
  {
    "breadcrumb": "Nvim",
    "content": "Go to your neovim configuration folder, based on your os will be in one of the following path:\nWindows %USERPROFILE%\\AppData\\Local\\nvim Linux / MacOS ~/.config/nvim Inside this folder create, if not already present, the init.lua file and add/change the following command:\nvim.cmd(\"language en_US\") For other languages, change the en_US to your preferred locale\nNote If I wanted to set It in Italian, I would write vim.cmd(\"language it_IT\")\nIf you’re unsure about your locale code, you can find it in this wikipedia page\nsource",
    "description": "Go to your neovim configuration folder, based on your os will be in one of the following path:\nWindows %USERPROFILE%\\AppData\\Local\\nvim Linux / MacOS ~/.config/nvim Inside this folder create, if not already present, the init.lua file and add/change the following command:\nvim.cmd(\"language en_US\") For other languages, change the en_US to your preferred locale\nNote If I wanted to set It in Italian, I would write vim.cmd(\"language it_IT\")",
    "tags": [],
    "title": "Set Default Language",
    "uri": "/HowTo/nvim/set-default-language/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Nvim",
    "uri": "/HowTo/nvim/index.html"
  },
  {
    "breadcrumb": "Python",
    "content": "Windows Solution locate the Python Launcher folder\nUsually at C:\\Users\\[USERNAME]\\AppData\\Local\\Programs\\Python\\Launcher\nInside you should see a py.exe and a pyw.exe\nCreate two additional files named py.ini and pyw.ini, so that in that folder you should have at least those files:\npy.exe py.ini pyw.exe pyw.ini Now inside py.ini and pyw.ini paste the following lines:\n[defaults] python=3.12 In this case 3.12 is the preferred python version you’d like to use\nsource",
    "description": "Windows Solution locate the Python Launcher folder\nUsually at C:\\Users\\[USERNAME]\\AppData\\Local\\Programs\\Python\\Launcher\nInside you should see a py.exe and a pyw.exe\nCreate two additional files named py.ini and pyw.ini, so that in that folder you should have at least those files:\npy.exe py.ini pyw.exe pyw.ini Now inside py.ini and pyw.ini paste the following lines:\n[defaults] python=3.12 In this case 3.12 is the preferred python version you’d like to use\nsource",
    "tags": [],
    "title": "Set Default Version",
    "uri": "/HowTo/python/set-default-version/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Hello Pythonians! Here you can find all the relative guides for pythons!",
    "description": "Hello Pythonians! Here you can find all the relative guides for pythons!",
    "tags": [],
    "title": "Python",
    "uri": "/HowTo/python/index.html"
  },
  {
    "breadcrumb": "Windows \u003e Group Policy",
    "content": "Read Carefully This kind of warning is caused by some group policy settings, if you have a 3rd party antivirus installed on your PC or a work or school account is linked to your PC perhaps for software installation, first try removing one of those to understand what caused what.\nAnyway, if you have neither work account linked nor 3rd party antivirus try using this guide, or simply you have not yet found the solution, you’re welcome to continue reading.\nWarning SINCE THE GUIDE IS MODIFYING THE REGISTRY, DO A SYSTEM RESTORE POINT TO MITIGATE THE RISK OF DAMAGE!\nModify the registry using CMD as Admin Click Start Button type cmd right-click the icon, then run as Administrator Paste each of these commands into Command one at a time and press Enter, wait for each command to complete, before running the next command, if you receive an error on any command, ignore that and continue to the next command.\nreg delete \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\" /f reg delete \"HKLM\\Software\\Microsoft\\WindowsSelfHost\" /f reg delete \"HKLM\\Software\\Policies\" /f reg delete \"HKLM\\Software\\WOW6432Node\\Microsoft\\Policies\" /f reg delete \"HKLM\\Software\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Policies\" /f reg delete \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\" /v DisableAntiSpyware reg delete \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\" /f reg delete \"HKCU\\Software\\Microsoft\\WindowsSelfHost\" /f reg delete \"HKCU\\Software\\Policies\" /f reg delete \"HKLM\\Software\\Microsoft\\Policies\" /f Then, close Command Prompt and restart (don’t shut down) your PC.\nsource",
    "description": "Read Carefully This kind of warning is caused by some group policy settings, if you have a 3rd party antivirus installed on your PC or a work or school account is linked to your PC perhaps for software installation, first try removing one of those to understand what caused what.\nAnyway, if you have neither work account linked nor 3rd party antivirus try using this guide, or simply you have not yet found the solution, you’re welcome to continue reading.",
    "tags": [],
    "title": "Settings Managed by Organization",
    "uri": "/HowTo/windows/group-policy/settings-managed-by-organization/index.html"
  },
  {
    "breadcrumb": "Windows",
    "content": "Here you can find all fixes related to group policy problems!",
    "description": "Here you can find all fixes related to group policy problems!",
    "tags": [],
    "title": "Group Policy",
    "uri": "/HowTo/windows/group-policy/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Welcome! Here you can find all my knowledge to fix some quirks of Windows!",
    "description": "Welcome! Here you can find all my knowledge to fix some quirks of Windows!",
    "tags": [],
    "title": "Windows",
    "uri": "/HowTo/windows/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Here you can find all tips relative to mail services and app!",
    "description": "Here you can find all tips relative to mail services and app!",
    "tags": [],
    "title": "Mail",
    "uri": "/HowTo/mail/index.html"
  },
  {
    "breadcrumb": "Mail",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thunderbird",
    "uri": "/HowTo/mail/thunderbird/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/HowTo/categories/index.html"
  },
  {
    "breadcrumb": "Mail \u003e Thunderbird",
    "content": "In the Settings, search for Config Editor and click the button Config Editor…\nThere search for mailnews.default and from the results change the following:\nPreference Name Value mailnews.default_news_sort_order: x mailnews.default_news_sort_type: y mailnews.default_sort_order: x mailnews.default_sort_type: y to change the value double-click it or use the pencil button at the end of the row\nWhere for x choose one of the following (documentation):\n1 = Ascending 2 = Descending And for y choose one of the following (documentation):\n17 = None 18 = Date 19 = Subject 20 = Author 21 = ID (Order Received) 22 = Thread 23 = Priority 24 = Status 25 = Size 26 = Flagged 27 = Unread 28 = Recipient 29 = Location 30 = Label 31 = Junk Status 32 = Attachments 33 = Account 34 = Custom 35 = Received so if you want to sort all mail by descending date set the values as follows:\nmailnews.default_sort_order: 2 mailnews.default_sort_type: 18 source",
    "description": "In the Settings, search for Config Editor and click the button Config Editor…\nThere search for mailnews.default and from the results change the following:\nPreference Name Value mailnews.default_news_sort_order: x mailnews.default_news_sort_type: y mailnews.default_sort_order: x mailnews.default_sort_type: y to change the value double-click it or use the pencil button at the end of the row\nWhere for x choose one of the following (documentation):\n1 = Ascending 2 = Descending And for y choose one of the following (documentation):",
    "tags": [],
    "title": "Change Mail Default Order",
    "uri": "/HowTo/mail/thunderbird/change-mail-order/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/HowTo/tags/index.html"
  }
]
