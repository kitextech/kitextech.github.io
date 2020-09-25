"""A script for generating thumbnails.
A user specifies a directory which contains the images for which thumbnail has
to be generated.
Thumbnails will be stored inside directories named according to size of the
thumbnails.
Size of thumbnails to be created is passed as argument, in the following format
[(120,120),(240,240)]"""

from PIL import Image
import click
import os

@click.command()
@click.option('--directory', help='Directory which contains images', default="Founders")
@click.option('--sizes', default=[(360, 360)], help='Size of the thumbnail')
def create_thumbnail(directory, sizes):
    for filename in os.listdir(directory):
        pathName = os.path.join(directory, filename)
        if os.path.isfile(pathName) is True and pathName[-4:] == 'jpeg':
            for size in sizes:
                width, height = size

                im = Image.open(pathName)
                im.thumbnail(size)
                
                outfilename = '../press_thumbnail/{dir}/thumbnail_{width}_{height}_{name}'.format(dir=directory, name=filename, width=str(width), height=str(height))

                im.save(outfilename)
                # pathString = "thumbnail/{0}X{1}".format(width, height)
                # dirname = os.path.join(directory, pathString)
                # thumbnailpath = "{0}/{1}".format(dirname, filename)
                # try:
                #     write_thumbnail(thumbnailpath, thumbnail)
                # except IOError:
                #     os.makedirs(dirname)
                #     print("Directory created, {0}".format(dirname))
                #     write_thumbnail(thumbnailpath, thumbnail)


if __name__ == "__main__":
    create_thumbnail()