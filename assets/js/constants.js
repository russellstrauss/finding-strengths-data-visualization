consts = (function () {

	nodes = {
		DEFAULT_RADIUS: 50,
		EXPANDED_RADIUS: 500,
		EXPAND_PROXIMITY: 100
	},
	strengths = {
		achiever: {
			displayName: "Achiever",
			description: "People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.",
			waysToInteract: [
				"Take note of her achievements and recognize them when possible.",
				"Do not schedule meetings unless necessary as this can be frustrating for them when it obscures productivity. They can see them as boring and a waste of time unless they are essential.",
				"Working hard alongside them can be a bonding experience."
			]
		},
		activator: {
			displayName: "Activator",
			description: "People who are especially talented in the Activator theme can make things happen by turning thoughts into action. They are often impatient."
		},
		adaptability: {
			displayName: "Adaptability",
			description: "People who are especially talented in the Adaptability theme prefer to “go with the flow.” They tend to be “now” people who take things as they come and discover the future one day at a time."
		},
		analytical: {
			displayName: "Analytical",
			description: "People who are especially talented in the Analytical theme search for reasons and causes. They have the ability to think about all the factors that might affect a situation."
		},
		arranger: {
			displayName: "Arranger",
			description: "People who are especially talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to figure out how all of the pieces and resources can be arranged for maximum productivity.",
			waysToInteract: [
				"If a team needs to be created, utilize this person. She can recognize talents and get the right people in the right places.",
				"She has the ability to organize events well.",
				"This person is interested in complex projects with many variables. She will find projects with many routine task will bore her."
			]
		},
		belief: {
			displayName: "Belief",
			description: "People who are especially talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their life."
		},
		command: {
			displayName: "Command",
			description: "People who are especially talented in the Command theme have presence. They can take control of a situation and make decisions."
		},
		communication: {
			displayName: "Communication",
			description: "People who are especially talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters."
		},
		competition: {
			displayName: "Competition",
			description: "People who are especially talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests.",
			waysToInteract: [
				"Give them the opportunity to compete and to win. Victory will drive their achievements.",
				"After losing or missing a goal, give time to \"mourn\" their loss for a while. Then, help them quickly move to another victory."
			]
		},
		connectedness: {
			displayName: "Connectedness",
			description: "People who are especially talented in the Connectedness theme have faith in the links between all things. They believe there are few coincidences and that almost every event has a reason."
		},
		consistency: {
			displayName: "Consistency",
			description: "People who are especially talented in the Consistency theme are keenly aware of the need to treat people the same. They try to treat everyone in the world with consistency by setting up clear rules and adhering to them."
		},
		context: {
			displayName: "Context",
			description: "People who are especially talented in the Context theme enjoy thinking about the past. They understand the present by researching its history."
		},
		deliberative: {
			displayName: "Deliberative",
			description: "People who are especially talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate the obstacles."
		},
		developer: {
			displayName: "Developer",
			description: "People who are especially talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from these improvements."
		},
		discipline: {
			displayName: "Discipline",
			description: "People who are especially talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create."
		},
		empathy: {
			displayName: "Empathy",
			description: "People who are especially talented in the Empathy theme can sense the feelings of other people by imagining themselves in others’ lives or others’ situations."
		},
		focus: {
			displayName: "Focus",
			description: "People who are especially talented in the Focus theme can take a direction, follow through, and make the corrections necessary to stay on track. They prioritize, then act."
		},
		futuristic: {
			displayName: "Futuristic",
			description: "People who are especially talented in the Futuristic theme are inspired by the future and what could be. They inspire others with their visions of the future."
		},
		harmony: {
			displayName: "Harmony",
			description: "People who are especially talented in the Harmony theme look for consensus. They don’t enjoy conflict; rather, they seek areas of agreement."
		},
		ideation: {
			displayName: "Ideation",
			description: "People who are especially talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena."
		},
		includer: {
			displayName: "Includer",
			description: "People who are especially talented in the Includer theme are accepting of others. They show awareness of those who feel left out and make an effort to include them."
		},
		individualization: {
			displayName: "Individualization",
			description: "People who are especially talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how people who are different can work together productively.",
			waysToInteract: [
				"Talk to this person when you are having trouble understanding someone else's perspective. She can likely help you.",
				"She can help you identify your unique talents that will help you stand out.",
				"Talk to this person when you are having problems with other people, she will be able to help you with that as well."
			]
		},
		input: {
			displayName: "Input",
			description: "People who are especially talented in the Input theme have a craving to know more. Often they like to collect and archive all kinds of information."
		},
		intellection: {
			displayName: "Intellection",
			description: "People who are especially talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions."
		},
		learner: {
			displayName: "Learner",
			description: "People who are especially talented in the Learner theme have a great desire to learn and want to continuously improve. In particular, the process of learning, rather than the outcome, excites them."
		},
		maximizer: {
			displayName: "Maximizer",
			description: "People who are especially talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb.",
			waysToInteract: [
				"This person is interested in taking something that works well and making it great. They are not interested in fixing things that are completely broken.",
				"Much more interested in analyzing best-practices instead of continuous problem solving.",
				"Spend time with a maximizer if you do not have anyone around who focuses on your strengths.",
				"This person will expect you to focus on your strengths and value them rather than focusing on their weaknesses."
			]
		},
		positivity: {
			displayName: "Positivity",
			description: "People who are especially talented in the Positivity theme have an enthusiasm that is contagious. They are upbeat and can get others excited about what they are going to do."
		},
		relator: {
			displayName: "Relator",
			description: "People who are especially talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal."
		},
		responsibility: {
			displayName: "Responsibility",
			description: "People who are especially talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty."
		},
		restorative: {
			displayName: "Restorative",
			description: "People who are especially talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it."
		},
		selfAssurance: {
			displayName: "Self-Assurance",
			description: "People who are especially talented in the Self-Assurance theme feel confident in their ability to manage their own lives. They possess an inner compass that gives them confidence that their decisions are right."
		},
		significance: {
			displayName: "Significance",
			description: "People who are especially talented in the Significance theme want to be very important in the eyes of others. They are independent and want to be recognized."
		},
		strategic: {
			displayName: "Strategic",
			description: "People who are especially talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues."
		},
		woo: {
			displayName: "Woo",
			description: "People who are especially talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with another person."
		}
	},
	data = {
		phuXuanLe: {
			displayName: "Phu Xuan Le",
			rank1: strengths.achiever,
			rank2: strengths.competition,
			rank3: strengths.maximizer,
			rank4: strengths.individualization,
			rank5: strengths.arranger
		},
		russellStrauss: {
			displayName: "Russell Strauss",
			rank1: strengths.maximizer,
			rank2: strengths.adaptability,
			rank3: strengths.harmony,
			rank4: strengths.relator,
			rank5: strengths.significance
		},
		stephenCulp: {
			displayName: "Stephen Culp",
			rank1: strengths.harmony,
			rank2: strengths.relator,
			rank3: strengths.context,
			rank4: strengths.adaptability,
			rank5: strengths.input
		},
		meeganDecker: {
			displayName: "Meegan Decker",
			rank1: strengths.arranger,
			rank2: strengths.positivity,
			rank3: strengths.developer,
			rank4: strengths.adaptability,
			rank5: strengths.includer
		},
		ericLyons: {
			displayName: "Eric Lyons",
			rank1: strengths.ideation,
			rank2: strengths.strategic,
			rank3: strengths.deliberative,
			rank4: strengths.connectedness,
			rank5: strengths.learner
		},
		tylerJohnston: {
			displayName: "Tyler Johnston",
			rank1: strengths.restorative,
			rank2: strengths.strategic,
			rank3: strengths.learner,
			rank4: strengths.achiever,
			rank5: strengths.deliberative
		},
		johnSchneider: {
			displayName: "John Schneider",
			rank1: null,
			rank2: null,
			rank3: null,
			rank4: null,
			rank5: null
		},
		sarveshJain: {
			displayName: "Sarvesh Jain",
			rank1: null,
			rank2: null,
			rank3: null,
			rank4: null,
			rank5: null
		},
		danielNedelcu: {
			displayName: "Daniel Nedelcu",
			rank1: null,
			rank2: null,
			rank3: null,
			rank4: null,
			rank5: null
		},
		grahamEngbertson: {
			displayName: "Graham Engbertson",
			rank1: null,
			rank2: null,
			rank3: null,
			rank4: null,
			rank5: null
		},
		lindsayMarshall: {
			displayName: "Lindsay Marshall",
			rank1: null,
			rank2: null,
			rank3: null,
			rank4: null,
			rank5: null
		}
	}

	return {

		nodes: nodes,
		strengths: strengths,
		data: data

	}

})(window.consts, document, window);