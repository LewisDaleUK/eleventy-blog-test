const Image = require('@11ty/eleventy-img');

const defaultSizes = `
    (max-width: 300px) 300px,
    (max-width: 600px) 600px,
    (max-width: 1000px) 1000px,
    (max-width: 1440px) 1440px,
    (max-width: 2500px) 2500px,
    (min-width: 2500px) 3840px
`;

const imageShortcode = (src, alt, cls, sizes = defaultSizes, widths = [300, 600, 1000, 1440, 2500, 3840]) => {
    let options = {
        widths: widths,
        formats: ['webp', 'jpeg'],
        outputDir: "./_site/img",
    };

    // generate images, while this is async we don’t wait
    Image(src, options);

    let imageAttributes = {
        class: cls,
        alt,
        sizes,
        decoding: "async",
    };
    // get metadata even the images are not fully generated
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
}

const remoteImageShortcode = async (src, alt, cls, sizes = defaultSizes, widths = [300, 600, 1000, 1440, 2500, 3840]) => {
    let metadata = await Image(src, {
        widths,
        formats: ["webp", "avif", "jpeg", "png"],
        outputDir: "./_site/img",
      });
    
      let imageAttributes = {
        alt,
        class: cls,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
    
      // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
}
module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("image", imageShortcode);
    eleventyConfig.addAsyncShortcode("remoteImage", remoteImageShortcode);
}