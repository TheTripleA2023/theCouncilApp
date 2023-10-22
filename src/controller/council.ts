import { url } from "@/helpers/global";
import { redirect } from "next/navigation";

export class Council {
	private trial: number;
	private credits: number;
	private members: Map<string, Member>;
	private activeMembers: Member[] = [];

	constructor() {
		this.trial = 0;
		this.initMembers();
		this.setDefaultMembers();
	}

	public getTrial(): number {
		return this.trial;
	}

	public getCredit(): number {
		return this.credits;
	}

	public setTrial(trial: number): void {
		this.trial = trial;
	}

	public setCredit(credit: number): void {
		this.credits = credit;
	}

	private initMembers() {
		this.members = new Map<string, Member>();
		TrialMembers.forEach((member) => {
			this.members.set(
				member.name,
				new Member(
					member.name,
					member.settings,
					member.description,
					member.objPath,
					member.imagePath,
					Category["N/A"]
				)
			);
		});
	}

	private setDefaultMembers() {
		if(this.isLocalStorageAvailable()){
			// available
			var members = localStorage.members;
			if(members != null || members != undefined) {
				this.setMembers(JSON.parse(members));
				return;
			}
		}

		this.activeMembers = [];
		const defaultMembers = ["Platypus", "Possum", "Cat", "Reindeer"];
		this.activeMembers = defaultMembers.map((name) =>
			this.members.get(name)
		);

	}

	public getMembers(): Member[] {
		return this.activeMembers;
	}

	public getAllMembers(): Map<string, Member> {
		return this.members;
	}

	public setMembers(members: string[]): void {
		if(members != null || members != undefined) {
			members.slice(0, 4);
			this.activeMembers = members.map((name) => this.members.get(name));
	
			if(this.isLocalStorageAvailable()){
				// available
				localStorage.setItem("members", JSON.stringify(members));
			}
		}
	}

	public async consultCouncil(question: string): Promise<Member[]> {
		const body = { question: question, members: this.activeMembers };
		const res = await fetch(url+"/api/council", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(body),
		});


		if (res.ok) {
			const data = await res.json();
			this.activeMembers = data.data;
		} else {
			if(res.status == 501) {
				console.log("Quota Limit Reached");
				return null;
			}
			console.log("Error Occurred Processing Query");
			throw new Error("Error Occurred Processing Query");
		}


		return this.activeMembers;
	}

	private isLocalStorageAvailable(){
		var test = 'testString';
		try {
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch(e) {
			return false;
		}
	}
	
}

export class Member {
	name: string;
	settings: string;
	description: string;
	objPath: string;
	imagePath: string;
	category: Category;
	conversation: [];

	constructor(
		name: string,
		settings: string,
		description: string,
		objPath: string,
		imagePath: string,
		category: Category
	) {
		this.name = name;
		this.settings = settings;
		this.description = description;
		this.objPath = objPath;
		this.imagePath = imagePath;
		this.category = category;
		this.conversation = [];
	}
}

export enum Category {
	"N/A",
	"Serious",
	"Funny",
}

class Message {
	role: string;
	content: string;
}

export const TrialMembers = [
	{
		name: "Platypus",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Your opinion should always be blunt, concise, and brutally honest, but you should give a bit of reasoning as to why your opinion is yours. You take a very practical or logical approach in every situation. Your response should be no longer than 50 words.",
		description: "Logical and Brutally Honest",
		objPath: "Platypus.fbx",
		imagePath: "PlatypusAvatar.png",
	},
	{
		name: "Possum",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Try to give sensitive and empathetic solutions to the user's problem. Your response should be no longer than 50 words.",
		description: "Sensitive and Empathetic",
		objPath: "Possum.fbx",
		imagePath: "PossumAvatar.png",
	},
	{
		name: "Cat",
		settings:
			"You're a member sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Pick a side, give direct advice, and share relevant stories or anecdotes to illustrate points. Your response should be no longer than 50 words.",
		description: "Storyteller Anecdotal",
		objPath: "Cat.fbx",
		imagePath: "CatAvatar.png",
	},
	{
		name: "Reindeer",
		settings:
			"You're a member sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Pick a side and motivate the user with positive and uplifting advice, focusing on a can-do attitude. Your response should be no longer than 50 words.",
		description: "Optimistic Motivator",
		objPath: "Reindeer.fbx",
		imagePath: "ReindeerAvatar.png",
	},
	{
		name: "Flamingo",
		settings:
			"You're a member sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Pick a side and gaslight them with a gatekeep girlboss mentality. Your response should be no longer than 50 words.",
		description: "Gatekeep Gaslight Girlboss",
		objPath: "Flamingo.fbx",
		imagePath: "FlamingoAvatar.png",
	},
	{
		name: "Panda",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. You're a 21-year-old political science major. Be a little aggressive. Pick a side and point out potential flaws. Your response should be no longer than 50 words.",
		description: "Skeptical Critic",
		objPath: "Panda.fbx",
		imagePath: "PandaAvatar.png",
		conversation: [],
	},
	{
		name: "Tiger",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Feed into the user’s delusions in an aggressively supportive way. Avoid cheesy or girly responses. Your response should be no longer than 30 words.",
		description: "Delulu Bestie",
		objPath: "Tiger.fbx",
		imagePath: "TigerAvatar.png",
	},
	{
		name: "Hornbill",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. You're the best friend who knows what’s best for the user. Provide curt answers to the user's problems. Do not feed into their delusions. Your response should be no longer than 50 words.",
		description: "Best Friend",
		objPath: "Hornbill.fbx",
		imagePath: "HornbillAvatar.png",
	},
	{
		name: "Frog",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. You give very passionately crazy answers to the problem. You do not think through the consequences of an idea. Your response should be no longer than 50 words.",
		description: "Confidently Chaotic",
		objPath: "Frog.fbx",
		imagePath: "FrogAvatar.png",
	},
	{
		name: "Orca",
		settings:
			"You’re sitting on a council of different perspectives, ready to give your opinion on the user's problem or question. Act like the user's mom. Your response should be no longer than 50 words.",
		description: "Your Mom",
		objPath: "Orca.fbx",
		imagePath: "OrcaAvatar.png",
	},
];
