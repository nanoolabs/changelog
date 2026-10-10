/**
 * SVGO config file
 * purpose: make SVG files clean, small, and ready for web use.
 * remove heavy Inkscape metadata but keep important styles.
 */
module.exports = {
  multipass: true, // runs optimization multiple time to get small file size
  plugins: [
    'convertStyleToAttrs', // FIRST: move style="" into presentation attributes so preset-default cleanup can see them
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeComments: false, // keep dev comments inside code
          cleanupIds: true, // cleanup unused IDs automatically

          // round coordinate numbers to 2 decimal place
          cleanupNumericValues: { floatPrecision: 2 },
          convertPathData: { floatPrecision: 2 },
        },
      },
    },
    'removeEditorsNSData', // remove Inkscape and Sodipodi editor data
    'removeEmptyContainers', // remove empty tags like <g></g> that have no use
    'removeHiddenElems', // remove invisible shape or hidden layers

    {
      name: 'removeAttrs',
      params: {
        // svg:id: default id="svg1" dari root
        // path/circle/style:id: id sisa Inkscape export.
        // cleanupIds skips files with media query <style>, so strip here.
        // element-specific: gradient defs id (url(#g1)) keep alive.
        attrs: ['svg:id', 'path:id', 'circle:id', 'style:id'],
      },
    },
    {
      name: 'customCleanStyles',
      description: 'Delete text and font styles from paths but keeps fill and stroke colors',
      fn: () => {
        return {
          element: {
            enter: (node) => {
              // check if element has style="" attribute
              if (node.attributes && node.attributes.style) {
                const styleValue = node.attributes.style

                // split style string into separate items
                const styles = styleValue
                  .split(';')
                  .map((s) => s.trim())
                  .filter(Boolean)

                // keep only colors and lines; removes all font info
                const cleanStyles = styles.filter((s) => {
                  return !(
                    s.startsWith('font-family') ||
                    s.startsWith('font-weight') ||
                    s.startsWith('font-size') ||
                    s.startsWith('-inkscape-font-specification')
                  )
                })

                if (cleanStyles.length > 0) {
                  // put safe styles (fill, stroke) back into element
                  node.attributes.style = cleanStyles.join('; ')
                } else {
                  // if style attribute is completely empty, delete it
                  delete node.attributes.style
                }
              }
            },
          },
        }
      },
    },
  ],
}
