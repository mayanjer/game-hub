
interface Image{
    width: string;
    length : string
}

const cropImage = function (url: string, { width, length }: Image) {
    if (!url) return ''
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + `crop/${width}/${length}/` + url.slice(index);


}
export default cropImage