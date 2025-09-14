---
title: "网上关于podman一个常见错误"
date: 2020-04-19
categories: 
  - "others"
---

网上很多关于Podman的文章是从docker的方法改的，比如-v参数，在docker里是映射host路径，然而podman是没有这个参数（严格意义来说podman的-v是显示版本号的）。我用的podman是1.6.4版本的。下面是podman的全部命令参数列表，当然我不知道是什么意思……

```
Usage:
  podman [flags]
  podman [command]

Available Commands:
  attach      Attach to a running container
  build       Build an image using instructions from Containerfiles
  commit      Create new image based on the changed container
  container   Manage Containers
  cp          Copy files/folders between a container and the local filesystem
  create      Create but do not start a container
  diff        Inspect changes on container's file systems
  events      Show podman events
  exec        Run a process in a running container
  export      Export container's filesystem contents as a tar archive
  generate    Generated structured data
  healthcheck Manage Healthcheck
  help        Help about any command
  history     Show history of a specified image
  image       Manage images
  images      List images in local storage
  import      Import a tarball to create a filesystem image
  info        Display podman system information
  init        Initialize one or more containers
  inspect     Display the configuration of a container or image
  kill        Kill one or more running containers with a specific signal
  load        Load an image from container archive
  login       Login to a container registry
  logout      Logout of a container registry
  logs        Fetch the logs of a container
  mount       Mount a working container's root filesystem
  network     Manage Networks
  pause       Pause all the processes in one or more containers
  play        Play a pod
  pod         Manage pods
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image from a registry
  push        Push an image to a specified destination
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Removes one or more images from local storage
  run         Run a command in a new container
  save        Save image to an archive
  search      Search registry for image
  start       Start one or more containers
  stats       Display a live stream of container resource usage statistics
  stop        Stop one or more containers
  system      Manage podman
  tag         Add an additional name to a local image
  top         Display the running processes of a container
  umount      Unmounts working container's root filesystem
  unpause     Unpause the processes in one or more containers
  unshare     Run a command in a modified user namespace
  varlink     Run varlink interface
  version     Display the Podman Version Information
  volume      Manage volumes
  wait        Block on one or more containers

Flags:
      --cgroup-manager string     Cgroup manager to use (cgroupfs or systemd) (default "systemd")
      --cni-config-dir string     Path of the configuration directory for CNI networks
      --config string             Path of a libpod config file detailing container server configuration options
      --conmon string             Path of the conmon binary
      --cpu-profile string        Path for the cpu profiling results
      --events-backend string     Events backend to use
      --help                      Help for podman
      --hooks-dir strings         Set the OCI hooks directory path (may be set multiple times)
      --log-level string          Log messages above specified level: debug, info, warn, error, fatal or panic (default "error")
      --namespace string          Set the libpod namespace, used to create separate views of the containers and pods on the system
      --network-cmd-path string   Path to the command for configuring the network
      --root string               Path to the root directory in which data, including images, is stored
      --runroot string            Path to the 'run directory' where all state information is stored
      --runtime string            Path to the OCI-compatible binary used to run containers, default is /usr/bin/runc
      --storage-driver string     Select which storage driver is used to manage storage of images and containers (default is overlay)
      --storage-opt stringArray   Used to pass an option to the storage driver
      --syslog                    Output logging information to syslog as well as the console
      --tmpdir string             Path to the tmp directory
      --trace                     Enable opentracing output
  -v, --version                   Version of podman
```

**2020.4.20  
重要更新：以上皆是胡说八道，原因是pull下来的是for 7的版本，然而我的centos是8,导致一些权限错误。pull了另一个版本后正常了，没有报-v不存在的错误。PS.podman的资料真是少的可怜。**
