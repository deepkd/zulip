const list_selectors = ["#stream_filters", "#global_filters", "#user_presences"];

export function inside_list(e) {
    const $target = $(e.target);
    const in_list = $target.closest(list_selectors.join(", ")).length > 0;
    return in_list;
}

export function go_down(e) {
    const $target = $(e.target);
    $target.closest("li").next().find("a").trigger("focus");
}

export function go_up(e) {
    const $target = $(e.target);
    $target.closest("li").prev().find("a").trigger("focus");
}
