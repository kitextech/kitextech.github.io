import click
import os

width=360
height=360


@click.command()
@click.option('--directory', help='Directory which contains images', default="Founders")
def create_frontmatter(directory):
    for filename in os.listdir(directory):
        pathName = os.path.join(directory, filename)
        if os.path.isfile(pathName) is True and pathName[-4:] == 'jpeg':
            
            outString = '''  - image_path: /images/press/{dir}/{filename}
    thumb_path: /images/press_thumbnail/{dir}/thumbnail_{width}_{height}_{name}
    title: XXX
    info: xxx'''.format(name=filename, width=width, height=height, filename=filename, dir=directory)
            
            print(outString)

if __name__ == "__main__":
    create_frontmatter()