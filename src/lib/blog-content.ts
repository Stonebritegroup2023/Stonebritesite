/**
 * Real article bodies, written in the owner's plain first-person voice.
 * Primary goals: SEO + LLM optimization — direct answers, real numbers,
 * Sacramento-area entities, and per-post FAQs (also emitted as FAQPage
 * structured data). A post only appears on the site when it has an entry
 * here AND `published: true` in blog-data.ts.
 */

export interface PostSection {
  id: string;
  heading: string;
  paras: string[];
  list?: string[];
  afterList?: string[];
}

export interface PostContent {
  quickAnswer: string;
  sections: PostSection[];
  faqs: { q: string; a: string }[];
}

export const BLOG_CONTENT: Record<string, PostContent> = {
  /* ────────────────────────────────────────────────────────────────────── */
  "bathroom-remodel-cost-sacramento": {
    quickAnswer:
      "In the Sacramento area, most bathroom remodels land between $15,000 and $60,000. A straightforward pull-and-replace usually runs $15,000–$25,000, a full remodel of a typical hall or primary bath runs $25,000–$45,000, and custom work with layout changes runs $45,000–$60,000+. The honest answer depends on three things: how much you're changing, what's hiding behind your walls, and the materials you pick.",
    sections: [
      {
        id: "the-honest-answer",
        heading: "The honest answer, with real numbers",
        paras: [
          "When I sit down with homeowners after walking through their bathroom, the first question is almost always the same: what is this going to cost? So let me answer it the way I do in person — with real numbers instead of \"it depends.\"",
          "For a bathroom where we keep the layout — the tub stays where the tub is, the toilet stays where the toilet is — and replace everything with quality mid-range materials, you're usually looking at $15,000 to $25,000. That covers new tile or panel walls in the shower, proper waterproofing, a new vanity and top, flooring, lighting, paint, and fixtures.",
          "For a full remodel of a typical hall bath or primary bath — everything down to the studs, new everything, maybe a tub-to-shower conversion — most of our projects land between $25,000 and $45,000.",
          "Once you get into layout changes, custom tile work, curbless showers, heated floors, or expanding the room (we once removed a closet and pushed a bathroom into the hallway to make it senior-friendly), you're in the $45,000 to $60,000+ range.",
          "Could you find someone to do it for $10,000? Probably. I'll explain later in this article why that number usually doesn't mean what you hope it means.",
        ],
      },
      {
        id: "where-the-money-goes",
        heading: "Where the money actually goes",
        paras: [
          "People are sometimes surprised that a room this small costs this much. Here's the thing: a bathroom is the most trade-dense room in your house. In 50 square feet you've got plumbing, electrical, framing, waterproofing, tile, glass, cabinetry, and paint — every trade shows up, and everything has to be watertight.",
          "On a typical $30,000 full remodel, roughly half is skilled labor. The rest splits between demolition and haul-away, the waterproofing system, tile and setting materials, the shower glass, the vanity and top, plumbing fixtures, electrical work and lighting, and the permit — which in most cities around here is a few hundred dollars.",
          "The two line items people underestimate most are waterproofing and glass. A properly installed membrane system behind your tile is not the place anyone should economize, and a frameless glass enclosure alone can run $1,500–$3,500 fabricated and installed.",
        ],
      },
      {
        id: "what-drives-cost-up",
        heading: "What drives the price up",
        paras: [
          "A few specific decisions and discoveries move the number more than anything else:",
        ],
        list: [
          "Moving plumbing. Relocating a toilet or drain means opening the floor, rerouting pipe, and sometimes structural work. Keeping fixtures where they are is the single biggest money-saver there is.",
          "Hidden conditions. Older Sacramento and Davis homes often surprise us — rotted subfloor around the tub, galvanized pipe that should have been replaced decades ago, framing that isn't level. Good contractors price honestly for what they can see and put in writing how they handle what they can't.",
          "Custom tile work. Herringbone patterns, mosaic niches, floor-to-ceiling tile — beautiful, and labor-intensive. Every cut costs minutes, and minutes add up.",
          "Curbless (zero-step) showers. They require lowering the floor or building it up around the pan, plus a more involved waterproofing detail. Worth it for many people — but it's real work.",
          "Fixture and finish grade. There are $150 shower valves and $1,200 shower valves. Both keep you clean. A good contractor tells you where the expensive one is worth it and where it isn't.",
        ],
      },
      {
        id: "why-bids-differ",
        heading: "Why one bid says $18,000 and another says $38,000",
        paras: [
          "This is the part I wish every homeowner knew before collecting quotes. When two bids for the \"same\" bathroom are $20,000 apart, they are almost never bidding the same project.",
          "The low bid is usually missing things: waterproofing that's just cement board and a prayer, no line for haul-away or permits, glass \"to be determined later,\" and allowances (more on those next) set so low that you'll blow through them the first time you walk into a tile store.",
          "Some companies also bid low on purpose, knowing they'll make it back on change orders once your bathroom is torn apart and you have no practical way to say no. I've rebuilt showers behind that exact story.",
          "The only fair way to compare bids is line by line: what exactly is included, what's excluded, and what's an allowance. If a quote is one number on one page, you don't actually know what you're buying.",
        ],
      },
      {
        id: "allowances-explained",
        heading: "Allowances — the fine print that changes everything",
        paras: [
          "An allowance is a placeholder in your contract for something you haven't picked yet — usually tile, fixtures, or the vanity. The contract might say \"tile allowance: $600.\"",
          "Here's the trick to watch for: if that allowance is set at $2 per square foot and everything you like at the showroom is $8, your \"$18,000 bathroom\" just grew by thousands — legally, and per the contract you signed.",
          "When I write allowances, I set them at what my clients actually end up spending, based on real projects, and I tell you upfront which numbers are guaranteed and which could shift. Ask any contractor you talk to for the same thing. How they answer will tell you a lot.",
        ],
      },
      {
        id: "how-to-save",
        heading: "Where you can save — and where you shouldn't",
        paras: [
          "There are smart ways to bring the number down, and I'll happily help you find them:",
        ],
        list: [
          "Keep the layout. I'll say it again because it's the biggest one.",
          "Consider quality solid-surface panels instead of tile for the shower walls — a seamless, grout-free look that installs faster.",
          "Choose a standard-size glass door instead of custom frameless.",
          "Pick in-stock tile and fixtures rather than special orders — better prices and no lead-time surprises.",
          "Phase the work: do the shower properly now, swap the vanity later.",
        ],
        afterList: [
          "Where you should never save: waterproofing, the shower valve inside the wall, and the skill of whoever installs them. Those three live behind your finished walls. When they're done wrong, you don't find out until there's a stain on the ceiling below — and fixing it means doing the bathroom twice.",
        ],
      },
      {
        id: "paying-for-it",
        heading: "How paying for it should work",
        paras: [
          "One more thing I tell every homeowner, because it protects you: in California, a licensed contractor cannot ask for a down payment larger than $1,000 or 10% of the contract price — whichever is less. That's state law. Anyone asking for half the money up front is either unaware of the law or hoping you are.",
          "A fair structure is milestone-based: a small deposit to get on the schedule, then payments as real stages complete — demo done, rough-in passed, tile finished, final walkthrough. You should always be paying for work that has already happened, not work that's promised.",
        ],
      },
      {
        id: "bottom-line",
        heading: "The bottom line",
        paras: [
          "If you take one thing from this article, take this: the cost of a bathroom remodel is knowable. A contractor who has done this hundreds of times can walk your bathroom, listen to what you want, and give you a written scope with a real number on it — not a range designed to get a foot in the door.",
          "If you're in Davis, Sacramento, or anywhere nearby, I'm glad to do exactly that. The estimate is free, it happens at your house, and it ends with a written proposal you can read on your own time — not a signature anyone should be pressuring you for on the spot.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does a typical mid-range bathroom remodel cost in Sacramento?",
        a: "Most full remodels of a standard hall or primary bath land between $25,000 and $45,000 with quality mid-range materials. A simpler pull-and-replace where the layout stays put usually runs $15,000–$25,000.",
      },
      {
        q: "Is a small bathroom much cheaper to remodel?",
        a: "Somewhat, but less than people expect. A small bathroom still has every trade in it — plumbing, waterproofing, tile, electrical. You save on materials quantity, but the skilled-labor hours don't shrink proportionally.",
      },
      {
        q: "How much should I budget for surprises?",
        a: "I recommend holding 10–15% in reserve, especially in homes older than the 1990s. If your contractor prices honestly upfront, you may never touch it — on well-scoped projects, zero change orders is an achievable outcome, not a fantasy.",
      },
      {
        q: "Do permits add a lot of cost?",
        a: "In most cities around Sacramento the permit itself is a few hundred dollars. What matters more is that the work is actually permitted and inspected when required — it protects you at resale and it means a second set of eyes on the plumbing and electrical.",
      },
      {
        q: "Does a bathroom remodel add value to my home?",
        a: "A well-done bathroom is consistently one of the stronger renovations at resale in our market — and unlike some projects, you get to use it every single day in the meantime. Just remodel for how you live first, and for resale second.",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  "tub-to-shower-conversion-what-homeowners-should-know": {
    quickAnswer:
      "A tub-to-shower conversion removes your old tub and builds a proper walk-in shower in its place — new pan, full waterproofing, tile or panel walls, and glass. Done right, it takes 5–10 business days and typically costs $12,000–$25,000 in the Sacramento area depending on materials and options. The two decisions that matter most: tile versus panels for the walls, and whether to add blocking for future grab bars while the walls are open.",
    sections: [
      {
        id: "who-this-is-for",
        heading: "Who a conversion actually makes sense for",
        paras: [
          "When I stand in a bathroom with a homeowner and they point at the tub, the story is almost always one of these: nobody has taken a bath in six years, someone's knees don't like climbing over the side anymore, or the bathroom is small and the tub eats a third of it.",
          "If any of those are you, a conversion is one of the most practical remodels there is. You use a shower every day; you'll feel this one every day.",
          "The one caution I give honestly: if this is the only tub in the whole house, think about it for a minute. Households with small kids want a tub, and some buyers look for at least one. If you've got a second bathroom with a tub, convert away without a second thought. If it's the only one — most of my clients still convert, but they do it knowingly.",
        ],
      },
      {
        id: "what-actually-happens",
        heading: "What actually happens, day by day",
        paras: [
          "People imagine this project as bigger and messier than it is. Here's how it really goes on our jobs:",
        ],
        list: [
          "Day 1–2: Protection and demolition. We cover floors and the path to the door, then the tub, surround, and old wall material come out — hauled away the same day, not stacked in your driveway.",
          "Day 2–3: Rough work. Plumbing moves from tub-height to shower-height, a new valve goes in the wall, and we build the shower pan — mortar bed or prefab, depending on the design.",
          "Day 3–4: Waterproofing. A full membrane system on the walls and floor, seams sealed. This is the step that decides whether your shower is still perfect in fifteen years.",
          "Day 4–8: Walls. Tile takes several days with proper cure times; solid-surface panels go faster.",
          "Final days: Fixtures, trim, glass measurement, cleanup, and walkthrough. Custom glass is fabricated after the tile is done, so the door itself often arrives a week or two later — you shower with a curtain rod in the meantime.",
        ],
        afterList: [
          "Through all of it, you should know what happened today and what happens tomorrow. On our projects you get that update daily, including what time we'll arrive — because contractors who won't tell you when they're showing up are telling you something.",
        ],
      },
      {
        id: "walls-tile-or-panels",
        heading: "The big choice: tile or panels",
        paras: [
          "Your shower walls will be either tile or a solid-surface panel system, and this drives both the look and part of the price. Tile gives you unlimited design — patterns, niches, accent bands. Panels give you a seamless marble-look wall with zero grout lines to scrub, installed in a day or two.",
          "We install both, so I have no horse in this race — I've written a full honest comparison in a separate article. The short version: design-driven homeowners usually go tile; easy-maintenance homeowners usually go panels; both are watertight when the membrane behind them is done right.",
        ],
      },
      {
        id: "future-ready",
        heading: "The smartest $200 in the whole project: blocking",
        paras: [
          "While your walls are open, we can screw solid wood blocking into the studs where grab bars might someday go. It costs almost nothing, it's invisible behind the finished wall, and it means a grab bar can be installed in twenty minutes years from now — instead of opening up a finished shower.",
          "I recommend it on nearly every conversion, whether you're 35 or 75. Nobody has ever called me to say they regret having blocking in their walls. If accessibility is a today-need rather than a someday-need, we take it further: curbless entry, a fold-down seat, a handheld on a slide bar. We've built bathrooms senior-friendly enough that a wheelchair rolls straight in, and they still look like something out of a design magazine.",
        ],
      },
      {
        id: "what-it-costs",
        heading: "What it costs",
        paras: [
          "In the Sacramento area, most quality tub-to-shower conversions run $12,000 to $25,000. The spread comes down to: tile versus panels, the glass (framed sliders versus custom frameless), fixture grade, whether we're doing curbless entry, and what we find when the tub comes out — in older homes, the floor under a 40-year-old tub occasionally has stories to tell.",
          "Be careful with the heavily-advertised \"one-day bath\" companies quoting less. What you're usually getting is an acrylic liner glued over the problem, a high-pressure sales pitch, and a lifetime warranty from a company you'll never get on the phone again. A real conversion — demo, new pan, membrane, real walls — takes more than a day, and it's worth the difference.",
        ],
      },
      {
        id: "wrap-up",
        heading: "Where to start",
        paras: [
          "If you're circling this decision, the useful first step is having someone who does these weekly look at your actual bathroom — where the plumbing runs, what the floor is doing, what's possible in your space. That's a free visit with us, and you'll get a written scope with a real number, not a pitch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the new shower keep the plumbing where the tub's was?",
        a: "Usually yes, and that's the cost-effective way to do it. The drain typically moves within the old tub's footprint and the valve moves up the same wall — that's normal scope, not a layout change.",
      },
      {
        q: "How soon can I use the shower?",
        a: "Tile needs proper cure time before heavy use — we'll give you the exact green light at walkthrough. If custom glass is being fabricated, you'll use a curtain for a week or two until the door is installed.",
      },
      {
        q: "Can I get a bench and a niche?",
        a: "Yes — built-in benches, recessed niches, and corner shelves are all standard options in both tile and panel systems. Niches beat hanging baskets in every way; plan them where the shampoo actually lives.",
      },
      {
        q: "Will removing my only tub hurt resale?",
        a: "If it's the only tub in the house, some family buyers will notice. If there's another tub anywhere in the home, converting has no practical downside — a modern walk-in shower reads as an upgrade to almost everyone.",
      },
      {
        q: "Do I need a permit for a tub-to-shower conversion?",
        a: "Often yes, since plumbing is being altered — it varies by city and scope. We determine what's required for your address and handle the permit ourselves; it's part of the job, not your homework.",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  "tile-shower-vs-manufactured-stone-walls": {
    quickAnswer:
      "Tile gives you unlimited design and a classic custom look, but it comes with grout to maintain and more installation days. Quality solid-surface panels give you a seamless, grout-free, marble-look wall that installs faster and cleans easier, with fewer design options. We install both, and the price difference is smaller than people think — good panels cost about what mid-range tile costs. What matters most in either case is the waterproofing behind the wall.",
    sections: [
      {
        id: "the-short-version",
        heading: "The short version",
        paras: [
          "I install both systems, so unlike a company that only sells one, I don't need to convince you of anything. I'd put it this way: tile is for homeowners who care most about design; panels are for homeowners who care most about easy living. Neither is \"the cheap one\" when done right, and both fail the same way when waterproofing is done wrong.",
        ],
      },
      {
        id: "what-tile-gets-you",
        heading: "What tile gets you",
        paras: [
          "Tile is infinitely customizable. Herringbone, stacked, subway, zellige, a mosaic accent in the niche, floor-to-ceiling drama — if you can picture it, tile can build it. Every tile shower we do is one of one, and when clients want the bathroom to be the showpiece of the house, tile is almost always the answer.",
          "It's also repairable in place: a cracked tile can be cut out and replaced. And real tile with a real membrane behind it lasts decades.",
          "The honest downsides: grout. Modern grouts are far better than what's in your 1980s shower, but joints still need occasional sealing and more scrubbing than a smooth panel. And tile takes longer to install — several days of skilled labor and cure times — which is part of what you're paying for.",
        ],
      },
      {
        id: "what-panels-get-you",
        heading: "What solid-surface panels get you",
        paras: [
          "Modern solid-surface panels are large-format sheets — often with a convincing marble look — that cover a shower wall with one to three pieces. That means a nearly seamless surface with no grout lines at all.",
          "What that buys you: cleaning a panel shower is wiping a smooth wall. Install takes a day or two instead of most of a week. Niches, benches, and trim are all available in matching material. For busy households, rentals, and anyone who never wants to think about grout again, panels are genuinely great.",
          "The honest downsides: you're choosing from a catalog of looks rather than designing freely, there will be a seam or two on larger walls (well-done ones are subtle), and if a panel is ever badly damaged you replace the panel, not a 4-inch square. Cheap thin panels can also look plasticky — quality matters a lot in this category.",
        ],
      },
      {
        id: "the-acrylic-warning",
        heading: "One warning: panels are not liners",
        paras: [
          "Don't confuse quality solid-surface panels with the thin acrylic liners the TV-advertised bath companies glue over your existing surround in a day. That's a cover-up, not a remodel — the old wall, and whatever moisture problem it has, is still under there.",
          "Those companies lead with a \"lifetime warranty.\" Read what it actually covers. A warranty on a product that traps a leak behind it is not protecting the part of your bathroom that matters. When we do panels, the old walls come out, the framing gets inspected, a real waterproofing membrane goes in, and then the panels go on. Same as tile, minus the grout.",
        ],
      },
      {
        id: "cost-truth",
        heading: "The cost truth",
        paras: [
          "People assume panels are the budget option. Sometimes — but quality solid-surface panels cost roughly what mid-range tile costs once labor is counted. Panels save on installation days; the material itself isn't cheap. Where the math swings: intricate custom tile work costs more than panels, and bargain-bin ceramic tile costs less — though the labor to set it doesn't shrink much.",
          "In other words: pick with your eyes and your lifestyle, not your calculator. The delta is rarely what decides the project.",
        ],
      },
      {
        id: "how-i-help-people-decide",
        heading: "How I help people decide",
        paras: [
          "Standing in your bathroom, I ask three questions. Who cleans this shower? If the answer comes with an eye-roll, panels earn serious consideration. Is this bathroom a design statement or a workhorse? Statement leans tile. And how long are you staying? A forever-home primary bath tips toward exactly what you want; a five-year plan tips toward broadly appealing and low-maintenance.",
          "Plenty of homes get both from us — tile in the primary bath where design matters, panels in the kids' or guest bath where Tuesday-night cleaning matters. There's no wrong answer here, just a right answer for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are panels waterproof on their own?",
        a: "The panels themselves are waterproof, but the system is only as good as what's behind it — seams, corners, and penetrations need proper sealing and the wall behind still gets a membrane on our jobs. \"The panel is the waterproofing\" is a corner being cut.",
      },
      {
        q: "Can I get niches and benches with panels?",
        a: "Yes — quality panel systems offer matching niches, benches, trim, and curbs. The look is cleaner and more built-in than the bolt-on accessories people remember from older systems.",
      },
      {
        q: "How bad is grout maintenance, really?",
        a: "With modern high-performance grout, far better than the shower you grew up with — but not zero. Expect occasional resealing and more attention in the corners. If that sentence annoyed you, that's useful information about which system you'll be happier with.",
      },
      {
        q: "Can you mix tile and panels?",
        a: "Yes — a common combination is panel walls with a tiled floor and curb, which gets you grout-free walls where scrubbing is worst and a custom look underfoot.",
      },
      {
        q: "Which lasts longer?",
        a: "Both outlast the question when installed over proper waterproofing — decades either way. Showers fail from what's behind the wall far more often than from the wall surface itself, which is why we're pickier about the membrane than the finish.",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  "how-long-does-bathroom-remodel-take": {
    quickAnswer:
      "Once work starts, a tub-to-shower conversion takes about 5–10 business days, a full bathroom remodel takes about 7–14 business days, and custom projects with layout changes run 3–4 weeks. The real schedule risk isn't the construction — it's what happens before it: selections not finalized, materials not on-site, and glass that gets measured only after tile is done. A contractor who locks all of that down before demo day is how projects finish on time — or early.",
    sections: [
      {
        id: "real-numbers",
        heading: "The real numbers",
        paras: [
          "Here's what I tell homeowners, based on how our projects actually run:",
        ],
        list: [
          "Tub-to-shower conversion: 5–10 business days of work.",
          "Full bathroom remodel (down to studs, same layout): 7–14 business days.",
          "Custom projects — layout changes, expansions, curbless builds: 3–4 weeks. When we removed a closet and expanded a bathroom into the hallway for a senior-friendly rebuild, that was a multi-week project and we said so upfront.",
        ],
        afterList: [
          "Two clarifications that matter. First, that's business days of active work, not calendar days from signing — there's usually a lead time of a few weeks before day one while materials arrive and the schedule opens. Second, those windows assume everything was decided and ordered before demo. That assumption is where other people's projects go sideways.",
        ],
      },
      {
        id: "week-by-week",
        heading: "What the weeks look like",
        paras: [
          "A full remodel follows a rhythm. Days one and two are protection and demolition — floors covered, dust contained, the old bathroom out and hauled away. Days two through four are the rough work: plumbing, electrical, framing corrections, and then inspection if the permit requires one.",
          "The middle stretch is waterproofing and tile — the part that can't be rushed, because membranes and mortar have cure times chemistry won't negotiate on. The final days are the satisfying ones: vanity, toilet, lighting, trim, paint, and fixtures land in quick succession, and the room becomes a bathroom again.",
          "Then there's glass. Custom shower glass gets measured after tile is finished — every shower is slightly different — and fabrication takes one to two weeks. That's normal and we plan for it; you'll have a working shower with a curtain in the meantime. Nobody warned you about that on TV, so I'm warning you here.",
        ],
      },
      {
        id: "what-causes-delays",
        heading: "What actually causes delays",
        paras: [
          "In my experience it's almost never the construction. It's these:",
        ],
        list: [
          "Selections made late. If tile hasn't been chosen, tile can't be ordered, and the schedule has a hole in it. We lock every selection before demo day for exactly this reason.",
          "Special-order materials. That perfect Spanish tile with a six-week lead time is fine — as long as everyone knows before the schedule is built, not after your bathroom is in a dumpster.",
          "Hidden conditions. Open a wall in an older Davis or Sacramento house and you occasionally meet rotted subfloor or plumbing from another era. It usually costs days, not weeks — and you should hear about it the day we find it, in writing, with a price.",
          "Inspection scheduling. Usually smooth around here, occasionally a day's wait. Build it in; don't be surprised by it.",
          "Crew-juggling. The big-volume outfits run many jobs at once, and when trades don't show, your project quietly loses days. Small and owner-led means when we're on your job, we're on your job.",
        ],
      },
      {
        id: "how-we-keep-schedule",
        heading: "How a project stays on schedule",
        paras: [
          "No magic — just discipline that's visible in how a contractor behaves before you've paid them anything. Everything selected and delivered before demo. A written day-by-day plan in the proposal. A daily update on what happened and what's next, including what time we arrive tomorrow.",
          "I'll let one of our clients say it: they told us the communication was great, they knew arrival times every day, and the project finished two weeks ahead of the promised window with zero change orders. That's not luck — that's what front-loading the decisions buys you.",
          "One related honesty note: I give estimated windows, not promised dates, and I put soft language in proposals on purpose. Anyone promising an exact completion date before demolition is telling you what you want to hear, not what the walls will allow.",
        ],
      },
      {
        id: "planning-around-it",
        heading: "Planning your life around it",
        paras: [
          "Yes, you can live at home — almost all of our clients do. The real question is bathroom count. If it's your only bathroom, tell us; we sequence the work to keep the toilet functional as long as possible and we treat the schedule with one-bathroom urgency. If you've got a second bath, the disruption is honestly modest: some noise, some dust control in the hallway, and a parade of deliveries.",
          "If you're trying to hit a deadline — guests at Thanksgiving, a knee surgery, a baby — start the conversation six to eight weeks ahead. The construction is fast. It's the runway that needs the time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I stay in the house during the remodel?",
        a: "Almost everyone does. We protect the path from the door, contain dust, and clean up daily. The main lifestyle hit is losing that bathroom for the duration — which is why bathroom count shapes how we sequence the work.",
      },
      {
        q: "Why won't you promise an exact finish date?",
        a: "Because I haven't seen inside your walls yet, and glass fabrication has its own timeline. I'll commit to an honest window and a day-by-day plan, and tell you immediately when anything moves. A precise date promised before demo is a sales tactic, not a schedule.",
      },
      {
        q: "Does the permit slow things down?",
        a: "Rarely by much in our area. Inspections are scheduled into the plan — occasionally one costs a day of waiting. The protection they give you at resale is worth far more than that day.",
      },
      {
        q: "What happens if you find damage inside the walls?",
        a: "You hear about it the same day, with photos, a written description, and a price — before any extra work happens. Hidden-condition surprises should cost days, not weeks, and they should never be a verbal \"we'll settle up later.\"",
      },
      {
        q: "Do you work weekends?",
        a: "Our standard schedule is weekdays — sustainable crews do better work. If a project timeline genuinely needs a weekend push, that's a conversation we have with you, not a decision made in your driveway.",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  "how-to-compare-bathroom-remodel-estimates": {
    quickAnswer:
      "You can't compare bathroom estimates by the number at the bottom — you compare them by what's actually inside. Check that every bid covers the same scope, look for line items instead of one lump sum, read the allowances (the classic low-bid trick), find what's excluded, and verify the license, insurance, and payment terms. In California, a down payment over $1,000 or 10% — whichever is less — is illegal, which is a fast way to spot a contractor who doesn't follow rules.",
    sections: [
      {
        id: "same-project-test",
        heading: "First: are they even bidding the same project?",
        paras: [
          "Here's the uncomfortable truth about collecting three bids: you almost never get three prices for the same project. You get three different projects wearing the same bathroom.",
          "One bid includes a full waterproofing membrane; one says \"cement board\" and hopes you don't ask. One includes glass; another lists it as \"by owner.\" One prices real tile work; another assumes the cheapest surround that technically counts. The bottom-line numbers differ by $15,000 and homeowners think they're comparing prices. They're comparing scopes.",
          "So before comparing dollars, line the bids up side by side and ask of each one: what exactly happens to my shower walls, my floor, my plumbing, my electrical — and who supplies each thing?",
        ],
      },
      {
        id: "line-items",
        heading: "Line items or it didn't happen",
        paras: [
          "A serious estimate is itemized: demolition and haul-away, plumbing rough-in, waterproofing system (named, not implied), wall finish, floor, vanity and top, fixtures, glass, electrical, paint, permits. When you can see the parts, you can compare the parts — and you can see what's missing.",
          "A one-number, one-page quote isn't automatically dishonest, but it makes honest comparison impossible, and it makes later disputes inevitable. \"I assumed that was included\" is the most expensive sentence in remodeling. If a contractor won't itemize, that tells you how the rest of the project will communicate, too.",
        ],
      },
      {
        id: "the-allowance-trick",
        heading: "Read the allowances — this is the classic trick",
        paras: [
          "An allowance is a budget placeholder for things you haven't picked yet: \"tile allowance $500, fixture allowance $400.\" The estimate looks complete. The number looks great.",
          "Then you go pick actual tile and actual fixtures, discover the allowances cover roughly none of what you like, and the difference lands on you as change orders — after your bathroom is already demolished. The low bid didn't win because it was cheaper. It won because it was less honest about what you'd really spend.",
          "The fix is simple: ask every bidder, \"are these allowances based on what your clients actually spend?\" and compare allowance amounts between bids the same way you compare the totals.",
        ],
      },
      {
        id: "exclusions",
        heading: "Hunt for what's not there",
        paras: [
          "The most expensive parts of a cheap bid are the missing lines. Go looking for these specifically:",
        ],
        list: [
          "Debris haul-away and dumpster fees",
          "Permits and inspection coordination",
          "Shower glass (a $1,500–$3,500 item \"to be discussed later\")",
          "Paint and drywall repair outside the wet area",
          "Fixture supply — does the bid include the toilet, valve, and faucet, or just labor to install ones you buy?",
          "A written waterproofing system — if the estimate doesn't name one, ask why",
        ],
        afterList: [
          "Every one of those is a real cost that exists whether or not it's on the paper. If it's not on the paper, you're paying for it later — you just don't know it yet.",
        ],
      },
      {
        id: "payment-terms",
        heading: "Payment terms tell you who you're dealing with",
        paras: [
          "California law caps a home-improvement down payment at $1,000 or 10% of the contract price, whichever is less. That's not my policy — it's the state's. A contractor asking for 30–50% up front is either ignorant of the law that governs their license or counting on you being.",
          "What fair looks like: a small deposit to schedule, then milestone payments tied to completed stages — demo done, rough inspection passed, tile complete, final walkthrough. Money follows work, never the other way around. And the final payment should sit with you until the punch list is finished, because it's the only leverage you have left.",
        ],
      },
      {
        id: "verify-basics",
        heading: "Verify the boring stuff — it takes five minutes",
        paras: [
          "Every California contractor's license can be checked at the CSLB website in about a minute — status, bond, and workers' comp coverage. Do it for every bidder, including us (we're #1113488, and I'd rather you check than take my word).",
          "Workers' comp matters more than people realize: if an uninsured worker gets hurt in your home, that can become your problem. And ask who actually performs the work — the person quoting you, their own crew, or whichever subcontractor is available that week. You're hiring the people who show up, not the person with the clipboard.",
        ],
      },
      {
        id: "cheap-bid-math",
        heading: "The math of the cheap bid",
        paras: [
          "After everything above, do this final exercise: take the low bid, mentally add realistic allowances, the missing glass, the haul-away, the permit, and one hidden-condition change order — and see where it lands. In my experience it lands at or above the honest bid, except now you've paid it to the contractor who was willing to hide it from you at the start.",
          "The estimate phase is a free preview of the whole project. The contractor who is transparent, specific, and unpressured now is who they'll be with your walls open. So is the other one.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many estimates should I get?",
        a: "Two or three from contractors you'd genuinely hire. Ten bids don't produce more clarity — they produce noise, and the process becomes about price alone, which is how the least honest scope wins.",
      },
      {
        q: "Is the highest bid the safest choice?",
        a: "No — price alone proves nothing in either direction. The safest bid is the most transparent one: itemized scope, realistic allowances, named waterproofing, legal payment terms, and verifiable license and insurance.",
      },
      {
        q: "Can I negotiate a remodel estimate?",
        a: "You can, but the productive version is negotiating scope, not squeezing labor: simpler tile, standard glass, phasing the vanity for later. A contractor who instantly drops 20% without changing scope has just told you the first number was padded.",
      },
      {
        q: "What if one bid is drastically lower than the others?",
        a: "Something is missing — waterproofing, glass, permits, insurance overhead, or the intention to make it up on change orders. Ask the low bidder to walk you through their scope line by line. The gap will explain itself quickly.",
      },
      {
        q: "Should an estimate cost money?",
        a: "For standard bathroom work in our area, the visit and written estimate should be free. Paid design consultations exist legitimately for large custom projects, but paying just to learn a price for a normal remodel isn't the local norm.",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  "what-to-ask-before-hiring-bathroom-remodeling-contractor": {
    quickAnswer:
      "Before you hire anyone, get clear answers to a handful of questions: Who actually does the work every day? Can I verify your license and insurance? What waterproofing system do you use — by name? Will the scope, exclusions, and allowances be in writing? How will you communicate during the project, and how are changes priced? What does your warranty actually cover? A good contractor answers all of these easily. Evasion on any of them is your answer.",
    sections: [
      {
        id: "why-these-questions",
        heading: "Why these questions work",
        paras: [
          "When a homeowner tells me a horror story about their last contractor, the story almost always traces back to a question that never got asked — who's actually showing up, what happens when something changes, what exactly does the warranty cover.",
          "None of the questions below require construction knowledge. They work because of how they're answered, not just what's answered. Specific, comfortable, documented answers predict a good project. Vague, defensive, or \"don't worry about that\" answers predict the other kind.",
        ],
      },
      {
        id: "who-does-the-work",
        heading: "\"Who will actually be in my house every day?\"",
        paras: [
          "This is the single most revealing question in remodeling. Many companies send a polished salesperson to your home, then hand the job to whichever subcontractor crew is available that month. The person you liked and trusted never touches your bathroom.",
          "Ask directly: who performs the work, who supervises it daily, and will I meet them before demo day? At Stonebrite the answer is short — you're talking to the person who'll be doing the work, and our own local crew, not a rotating cast of strangers. Whoever you're talking to, make sure you're evaluating the people who'll actually hold the trowel.",
        ],
      },
      {
        id: "license-insurance",
        heading: "\"Can I verify your license, bond, and insurance?\"",
        paras: [
          "In California this takes five minutes on the CSLB website — you can look up any license number and see its status, bond, and workers' compensation coverage. A legitimate contractor will hand you the number happily; ours is #1113488 and I'd genuinely rather you check it than take my word.",
          "Workers' comp is the part homeowners skip and shouldn't: if someone uninsured is injured working on your home, you can end up involved in ways you never imagined. \"We're licensed and insured\" is a sentence. The lookup is a fact.",
        ],
      },
      {
        id: "waterproofing",
        heading: "\"What waterproofing system do you use — specifically?\"",
        paras: [
          "This is my favorite filter question because it separates professionals from everyone else in one sentence. Your shower's finish — tile or panels — is not the waterproofing. The membrane system behind it is, and it's the difference between a shower that's perfect in year fifteen and a rotted wall you discover from the ceiling below.",
          "A pro answers with a name and a method — the membrane system, how seams and corners are treated, what happens at the pan. If the answer is \"we use cement board, it's fine\" or \"the tile keeps the water out,\" thank them for their time. I mean it: this one answer is worth the whole meeting.",
        ],
      },
      {
        id: "in-writing",
        heading: "\"Will all of this be in writing?\"",
        paras: [
          "The scope, the exclusions, the allowances and what they're based on, the payment schedule, the estimated timeline, the warranty — every one of those belongs on paper before any money moves. Not because anyone plans to be dishonest, but because memory is a terrible contract.",
          "Related and worth knowing: California caps the down payment at $1,000 or 10% of the contract, whichever is less. And a proposal isn't a hostage negotiation — you should be able to read it on your own time, without a \"tonight-only discount\" expiring while you decide. Pressure at the estimate is a preview of pressure during the project.",
        ],
      },
      {
        id: "communication",
        heading: "\"How will I know what's happening every day?\"",
        paras: [
          "The number-one complaint about contractors isn't workmanship — it's silence. Days nobody shows, no explanation, no idea what happens next.",
          "So ask: Will I get a daily update? Will I know what time you're arriving? Who do I call — and does that person answer? Our clients hear from us every working day: what got done, what's next, what time we'll be there. One reviewer put it simply — they always knew when we'd arrive, and we were always on time. That's not heroic. It's the baseline you should demand from anyone.",
        ],
      },
      {
        id: "changes",
        heading: "\"What happens when something changes?\"",
        paras: [
          "Something usually changes — you add a niche, or the wall opens up and reveals 1970s plumbing. The question is whether changes are handled in daylight: described in writing, priced before the work happens, and signed by you.",
          "Ask how hidden conditions are priced and whether you'll ever be billed for extra work you didn't approve in advance. \"We'll settle up at the end\" is how $3,000 surprises are born. A written change process protects both of us — and honestly, when a project is scoped carefully upfront, zero change orders is a realistic outcome. We've had clients finish exactly there.",
        ],
      },
      {
        id: "warranty",
        heading: "\"What does your warranty actually cover — and for how long?\"",
        paras: [
          "Everyone says they stand behind their work. Ask what that means on paper: What's covered — the waterproofing, the plumbing connections, the electrical? For how many years? Who shows up if something's wrong in year three, and how fast?",
          "Ours is a 5-year workmanship warranty covering the waterproofing system, plumbing connections, and electrical work we performed — written into the proposal, not mentioned on the way out the door. Be extra careful with \"lifetime warranty\" pitches from high-volume bath companies: read what's actually covered and picture actually reaching that company in year twelve. A specific 5-year promise from someone who answers the phone beats a vague lifetime promise from someone who won't.",
        ],
      },
      {
        id: "the-feel-test",
        heading: "The last test doesn't need a checklist",
        paras: [
          "After the questions, sit with the simplest one: how did the visit feel? Did they listen more than they pitched? Did they measure and look at your actual bathroom, or recite a script? Could you imagine this person in your home for two weeks?",
          "You're not just buying a shower — you're choosing who walks through your door every morning for a couple of weeks. Hire the person whose answers were specific, whose paperwork was clear, and whose presence didn't make you feel managed. If that ends up being us, great. If it ends up being someone else who answered all of this well, you'll still have gotten a good bathroom out of the deal — and that's the point of the article.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if an unlicensed contractor is much cheaper?",
        a: "In California, unlicensed work over $500 is illegal, usually uninsured, can void protections you'd otherwise have, and can complicate resale. The discount exists because the safety net doesn't. For a wet room with plumbing and electrical, it's not a trade worth making.",
      },
      {
        q: "How much deposit is legal in California?",
        a: "$1,000 or 10% of the contract price — whichever is less. It's one of the easiest red-flag checks there is: anyone asking for more is out of step with the law that governs their own license.",
      },
      {
        q: "How do I actually check a contractor's license?",
        a: "Search the license number on the CSLB (Contractors State License Board) website — it takes about a minute and shows status, bond, and workers' comp. Any contractor should volunteer their number; ours is #1113488.",
      },
      {
        q: "What are red flags at the first meeting?",
        a: "Pressure to sign today, a discount that expires tonight, a big cash deposit, no license number offered, vague answers on waterproofing, and a price quoted without measuring or looking closely at your bathroom. Any one of them is a reason to slow down.",
      },
      {
        q: "Should I expect to meet the crew before work starts?",
        a: "You should at least know exactly who is showing up and who supervises daily. With owner-led companies like ours that's automatic — the person who gives you the estimate is the person on the job. With larger companies, ask, because the answer often surprises people.",
      },
    ],
  },
};
