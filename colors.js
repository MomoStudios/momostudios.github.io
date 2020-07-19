color_list_as_arrays = color_list.map(entry =>
    entry["colors"].map(hex_color => hexToArray(hex_color))
);
flattened_color_list_array = color_list_as_arrays.map((color_array, index) =>
        color_array.map(color => [color, index])
    ).flat();

// mostly_r = [244, 0, 0]
// idx_mostly_r = searchOneColor(mostly_r)
// link_mostly_r = color_list[idx_mostly_r]["link"]

// orange_ish = [255, 120, 50]
// idx_orange_ish = searchOneColor(orange_ish)
// link_orange_ish = color_list[idx_orange_ish]["link"]

// Finds the set with the closest color to input color
// returns an index into color_list
function searchOneColor(color_array) {
    best_index = -1;
    best_distance = 999999

    flattened_color_list_array.forEach(entry => {
        color = entry[0];
        index = entry[1];
        d = distance(color_array, color)

        if (d < best_distance) {
            best_index = index;
            best_distance = d;
        }
    });

    return best_index;
}

// manhattan cause w/e
function distance(color1_array, color2_array) {
    dr = Math.abs(color1_array[0] - color2_array[0])
    dg = Math.abs(color1_array[1] - color2_array[1])
    db = Math.abs(color1_array[2] - color2_array[2])

    return dr + dg + db;
}

// input hex format is "RRGGBB" ie "0x" stripped
function hexToArray(color) {
    let r = 0, g = 0, b = 0;

    r = parseInt(color.substring(0,2), 16)
    g = parseInt(color.substring(2,4), 16)
    b = parseInt(color.substring(4,6), 16)

    return [r, g, b];
}