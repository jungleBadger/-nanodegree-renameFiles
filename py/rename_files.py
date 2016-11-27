import os
path = "../images/"
blackList = "0123456789"


def init():
    for file_name in list_files():
        rename_file(file_name)


def list_files():
    return os.listdir(path)


def rename_file(file_name):
    os.rename(path + file_name, file_name.translate(None, blackList))


init()