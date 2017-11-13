const INITIAL_STATE = {
	adjective: "",
	verb: "",
	adverb: "",
	story: ""
}; 
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
    	case "RENDER_STORY":
    		return renderStory(state, action.props);
    	case "CLEAR_FORM":
    		return clearForm(state);
        default: 
            return state; 
    } 
}

function renderStory(state, props) {
	let story = "One fine day, my trusty dog woke up to find a " + props.adjective + " cat.  The cat was " + props.verb + " " + props.adverb + ".  What a weird morning...";

    return Object.assign({}, state, {
    	story: story
	});
}

function clearForm(state) {
	let story = "";
    return Object.assign({}, state, {
    	story: story
	});
}
