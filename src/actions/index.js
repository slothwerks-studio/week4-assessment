export function renderStory(props) {
    return {
        type: "RENDER_STORY",
        props
    };
}

export function clearForm() {
    return {
        type: "CLEAR_FORM",
    };
}