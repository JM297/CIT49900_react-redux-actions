import React from "react";

const initState = {
    color: "#FFF8DC",
    products: [
        {
            id: "1",
            name: "Cereal",
            subHeader: "Cost: $4.99",
            color: "#DDA0DD"
        },
        {
            id: "2",
            name: "Chips",
            subHeader: "Cost: $2.99",
            color: "#008000"
        },
        {
            id: "3",
            name: "12 Pack of Soda",
            subHeader: "Cost: $5.99",
            color: "#6495ED"
        }
    ],
    blog: [
        {
            id: "1",
            title: "Dev Log: 09/25/2019",
            text: <p>Alright, I did the last two things I wanted to do in this network rewrite: having plots that last longer (using the existing civ-based spies as a model), and allowing plots to pass even further down the criminal organization networks (so that more evidence will be created while making the leaves of the org chart more active.) This has been good, and I think we're ready for investigation now! Hopefully! I also discovered a few problems with my org chart displayer, which is another way to make the networks look even more rich, ha ha (it wasn't printing certain assets.) This has been a long detour, but we should be to the heart of the adventure mode update now. Once that all works, fun for forts.</p>
        },
        {
            id: "2",
            title: "Dev Log: 09/18/2019",
            text: <p>This week I mostly pushed forward the ideas from last time. Plots can propagate out into dedicated criminal organizations from the non-criminal position holders (often through intermediaries), and criminal organizations can also expand out into other cities, forming branches much as the merchant companies do, where they then try to muscle out and subordinate local groups. These together have led to even more pleasantly rich and geographically-varied networks. We'll take a few more steps along these lines before trying to implement player-led investigations, but we're almost ready to give them a shot.</p>
        },
        {
            id: "3",
            title: "Dev Log: 09/11/2019",
            text: <p>I am mostly recovered from the traveling and am back to work. As mentioned in the log before the travels, it turned out that we needed more work to link up networks and to make sure every link was generating some evidence. As stated there, we decided to focus on criminal organizations, and the linkages are much better now! For villains without brighter ideas, doing some petty crime with a few like-minded individuals is a start, and then these groups can fuse and otherwise associate, with various skimming and tribute and so forth as some of them grow more powerful. This allows the standard anti-bandit/criminal quests to lead into evidence network crawling, as the most successful groups can draw back to a more villainous status (ie they need discovering rather than generating direct quests.) The next steps will include linking the more important, position-holding villains to these groups in a few ways, and also bringing in the bandits and perhaps certain hearth lords into the mix as criminal organization analogues. I'm much happier with how the network graphs look now, but we'll need to see an actual investigation to know if it's sufficient.<br/><br/>The individual network links will also need to be strengthened by adding more long-term jobs for the important villains; the big assassination/etc. plots resolve too quickly, and so feel a bit like old news when you start adventuring. This can be solved by treating them a little bit more like the existing civ-based agents, with some work to be done over some in-game months before any job can be pulled off, and by making position-holder corruption being easier to accomplish when some relationship groundwork has been laid. After this tweaking, we should have an evidence-rich environment that doesn't feel as artificially urgent.<br/><br/>Here's <a style={{color:'blue'}} href="https://www.youtube.com/watch?v=WW_dHPtC2wg" target="__blank">a recording of the live play of DF at PAX</a> with Nate Crowley of RockPaperShotgun and Victoria Tran of Kitfox, along with Zach and I. And for people that haven't seen the systems panel at PAX, here's a <a style={{color:'blue'}} href="https://player.twitch.tv/?video=475872864&amp;t=02h" target="__blank">recording on Twitch.</a></p>
        },
    ]
};

const rootReducer = (state=initState, action)=>{
    if(action.type==="DELETE_ITEM"){
        return {
            ...state,
            products : state.products.filter( (item, index) => index !== action.index)
        }
    }
    if(action.type==="CHANGE_COLOR"){
        return {
            ...state,
            color: action.color
        }
    }
    return state;
};

export default rootReducer;