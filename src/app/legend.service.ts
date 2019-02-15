import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  currentLegend: string = "none";

  legendList = ["bangalore", "bloodhound", "caustic", "gibraltar", "lifeline", "mirage", "pathfinder", "wraith"]

  legendDetails = [
    {
      name: "bangalore",
      portrait: "../../assets/legendPortrait/bangaloreResizedPortrait.png",
      passive: "Double Time",
      passiveDescription: "Taking fire while sprinting makes you move faster for a brief time.",
      tactical: "Smoke Launcher",
      tacticalDescription: "Fire a high-velocity smoke canister that explodes into a smoke wall on impact.",
      ultimate: "Rolling Thunder",
      ultimateDescription: "Call in an artillery strike that slowly creeps across the landscape."
    },
    {
      name: "bloodhound",
      portrait: "../../assets/legendPortrait/boodhoundResizedPortrait.png",
      passive: "Tracker",
      passiveDescription: "See tracks left behind by your foes.",
      tactical: "Eye of the Allfather",
      tacticalDescription: "Briefly reveal hidden enemies, traps, and clues throughout structures in front of you.",
      ultimate: "Beast of the Hunt",
      ultimateDescription: "Enhances your senses, allowing you move faster and highlighting your prey."
    },
    {
      name: "caustic",
      portrait: "../../assets/legendPortrait/causticResizedPortrait.png",
      passive: "Nox Vision",
      passiveDescription: "Allows you to see enemies through your gas.",
      tactical: "Nox Gas Trap",
      tacticalDescription: "Drop canisters that release deadly Nox gas when shot or triggered by enemies.",
      ultimate: "Nox Gas Grenade",
      ultimateDescription: "Blankets a large area in Nox gas."
    },
    {
      name: "gibraltar",
      portrait: "../../assets/legendPortrait/gibraltarResizedPortrait.png",
      passive: "Gun Shield",
      passiveDescription: "Aiming down sights deploys a gun shield that blocks incoming fire.",
      tactical: "Dome of Protection",
      tacticalDescription: "Throw down a dome-shield that blocks attacks for 15 seconds.",
      ultimate: "Defensive Bombardment",
      ultimateDescription: "Call in a concentrated mortar strike on a marked position."
    },
    {
      name: "lifeline",
      portrait: "../../assets/legendPortrait/lifelineResizedPortrait.png",
      passive: "Combat Medic",
      passiveDescription: "Revive knocked down teammates faster while protected by a shield wall. Healing items are used 25% faster.",
      tactical: "D.O.C. Heal Drone",
      tacticalDescription: "Call your Drone of Compassion to automatically heal nearby teammates over time.",
      ultimate: "Care Package",
      ultimateDescription: "Call in a drop pod full of high-quality defensive gear."
    },
    {
      name: "mirage",
      portrait: "../../assets/legendPortrait/mirageResizedPortrait.png",
      passive: "Encore!",
      passiveDescription: "Automatically drop a decoy and cloak for five seconds when knocked down.",
      tactical: "Psyche Out",
      tacticalDescription: "Send out a holographic decoy to confuse the enemy.",
      ultimate: "Vanishing Act",
      ultimateDescription: "Deploy a team of Decoys to distract enemies while you cloak."
    },
    {
      name: "pathfinder",
      portrait: "../../assets/legendPortrait/pathfinderResizedPortrait.png",
      passive: "Insider Knowledge",
      passiveDescription: "Scan a survey beacon to reveal the ring’s next location.",
      tactical: "Grappling Hook",
      tacticalDescription: "Grapple to get to out-of-reach places quickly.",
      ultimate: "Zipline Gun",
      ultimateDescription: "Create a zipline for everyone to use."
    },
    {
      name: "wraith",
      portrait: "../../assets/legendPortrait/wraithResizedPortrait.png",
      passive: "Voices from the Void",
      passiveDescription: "A voice warns you when danger approaches. As far as you can tell, it’s on your side.",
      tactical: "Into the Void",
      tacticalDescription: "Reposition quickly through the safety of void space, avoiding all damage.",
      ultimate: "Dimensional Rift",
      ultimateDescription: "Link two locations with portals for 60 seconds, allowing your entire team to use them."
    },
  ];

  constructor() { }

  changeLegend(legend: string){
    console.log(this.currentLegend)
    this.currentLegend = legend;
    console.log(this.currentLegend);
  }
}
