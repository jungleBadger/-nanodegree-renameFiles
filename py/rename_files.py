import os
path = "../images/"
blackList = "0123456789"


def init():
    for file_name in list_files():
        rename_file(file_name)


def list_files():
    return os.listdir(path)


def rename_file(file_name):
    filteredName = file_name.translate(None, blackList)
    os.rename(path + file_name, path + filteredName)
    showFileName(file_name, filteredName)


def showFileName(original, newName):
    print("original file name is: " + original)
    print("new file name is: " + newName)

init()