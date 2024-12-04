+++
date = "2024-12-02T14:52:59+01:00"
draft = false
title = "Update Images"
slug = "update-images"
+++


Inside the folder where the docker compose file is located, enter the following command to download the new version of the image(s)

```terminal
docker compose pull
```

Then run the following command to recreate the container and starting it up detached from the terminal

```terminal
docker compose up --force-recreate -d
```

> [!Note]
> if you have made modification to the image, use also the `--build` command:

```terminal
docker compose up --force-recreate --build -d
```

Now, if you like to remove the old image from storage, run:

```terminal
docker image prune -f
```

> [!Warning]
> This command will remove all unused image -> all images not used in running container!

[source](https://stackoverflow.com/a/49316987/14604627)
