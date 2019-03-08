import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  currentLegend: string = "";

  legendList = ["bangalore", "bloodhound", "caustic", "gibraltar", "lifeline", "mirage", "pathfinder", "wraith"]

  legendDetails = [
    {
      name: "bangalore",
      portrait: "../../assets/legendPortrait/bangaloreResizedPortrait.png",
      passive: "Double Time",
      passiveImage: "../../assets/legendAbilities/bangalore/bangalorePassive2.png",
      passiveDescription: "Taking fire while sprinting makes you move faster for a brief time.",
      tactical: "Smoke Launcher",
      tacticalImage: "../../assets/legendAbilities/bangalore/bangaloreTactical2.png",
      tacticalCooldown: "30 seconds",
      tacticalDescription: "Fire a high-velocity smoke canister that explodes into a smoke wall on impact.",
      ultimate: "Rolling Thunder",
      ultimateImage: "../../assets/legendAbilities/bangalore/bangaloreUltimate2.png",
      ultimateCooldown: "240 seconds",
      ultimateDescription: "Call in an artillery strike that slowly creeps across the landscape.",
      abilityBackground: "../../assets/images/bangaloreBackground.png"
    },
    {
      name: "bloodhound",
      portrait: "../../assets/legendPortrait/boodhoundResizedPortrait.png",
      passive: "Tracker",
      passiveImage: "../../assets/legendAbilities/bloodhound/bloodhoundPassive2.png",
      passiveDescription: "See tracks left behind by your foes.",
      tactical: "Eye of the Allfather",
      tacticalImage: "../../assets/legendAbilities/bloodhound/bloodhoundTactical2.png",
      tacticalCooldown: "35 seconds",
      tacticalDescription: "Briefly reveal hidden enemies, traps, and clues throughout structures in front of you.",
      ultimate: "Beast of the Hunt",
      ultimateImage: "../../assets/legendAbilities/bloodhound/bloodhoundUltimate2.png",
      ultimateCooldown: "180 seconds",
      ultimateDescription: "Enhances your senses, allowing you move faster and highlighting your prey.",
      abilityBackground: "../../assets/images/bloodhoundBackground.png"
    },
    {
      name: "caustic",
      portrait: "../../assets/legendPortrait/causticResizedPortrait.png",
      passive: "Nox Vision",
      passiveImage: "../../assets/legendAbilities/caustic/causticPassive2.png",
      passiveDescription: "Allows you to see enemies through your gas.",
      tactical: "Nox Gas Trap",
      tacticalImage: "../../assets/legendAbilities/caustic/causticTactical2.png",
      tacticalCooldown: "X seconds",
      tacticalDescription: "Drop canisters that release deadly Nox gas when shot or triggered by enemies.",
      ultimate: "Nox Gas Grenade",
      ultimateImage: "../../assets/legendAbilities/caustic/causticUltimate2.png",
      ultimateCooldown: "Y seconds",
      ultimateDescription: "Blankets a large area in Nox gas.",
      abilityBackground: "../../assets/images/causticBackground.png"
    },
    {
      name: "gibraltar",
      portrait: "../../assets/legendPortrait/gibraltarResizedPortrait.png",
      passive: "Gun Shield",
      passiveImage: "../../assets/legendAbilities/gibraltar/gibraltarPassive2.png",
      passiveDescription: "Aiming down sights deploys a gun shield that blocks incoming fire.",
      tactical: "Dome of Protection",
      tacticalImage: "../../assets/legendAbilities/gibraltar/gibraltarTactical2.png",
      tacticalCooldown: "X seconds",
      tacticalDescription: "Throw down a dome-shield that blocks attacks for 15 seconds.",
      ultimate: "Defensive Bombardment",
      ultimateImage: "../../assets/legendAbilities/gibraltar/gibraltarUltimate2.png",
      ultimateCooldown: "Y seconds",
      ultimateDescription: "Call in a concentrated mortar strike on a marked position.",
      abilityBackground: "../../assets/images/gibraltarBackground.png"
    },
    {
      name: "lifeline",
      portrait: "../../assets/legendPortrait/lifelineResizedPortrait.png",
      passive: "Combat Medic",
      passiveImage: "../../assets/legendAbilities/lifeline/lifelinePassive2.png",
      passiveDescription: "Revive knocked down teammates faster while protected by a shield wall. Healing items are used 25% faster.",
      tactical: "D.O.C. Heal Drone",
      tacticalImage: "../../assets/legendAbilities/lifeline/lifelineTactical2.png",
      tacticalCooldown: "60 seconds",
      tacticalDescription: "Call your Drone of Compassion to automatically heal nearby teammates over time.",
      ultimate: "Care Package",
      ultimateImage: "../../assets/legendAbilities/lifeline/lifelineUltimate2.png",
      ultimateCooldown: "300 seconds",
      ultimateDescription: "Call in a drop pod full of high-quality defensive gear.",
      abilityBackground: "../../assets/images/lifelineBackground.png"
    },
    {
      name: "mirage",
      portrait: "../../assets/legendPortrait/mirageResizedPortrait.png",
      passive: "Encore!",
      passiveImage: "../../assets/legendAbilities/mirage/miragePassive2.png",
      passiveDescription: "Automatically drop a decoy and cloak for five seconds when knocked down.",
      tactical: "Psyche Out",
      tacticalImage: "../../assets/legendAbilities/mirage/mirageTactical2.png",
      tacticalCooldown: "15 seconds",
      tacticalDescription: "Send out a holographic decoy to confuse the enemy.",
      ultimate: "Vanishing Act",
      ultimateImage: "../../assets/legendAbilities/mirage/mirageUltimate2.png",
      ultimateCooldown: "180 seconds",
      ultimateDescription: "Deploy a team of Decoys to distract enemies while you cloak.",
      abilityBackground: "../../assets/images/mirageBackground.png"
    },
    {
      name: "pathfinder",
      portrait: "../../assets/legendPortrait/pathfinderResizedPortrait.png",
      passive: "Insider Knowledge",
      passiveImage: "../../assets/legendAbilities/pathfinder/pathfinderPassive2.png",
      passiveDescription: "Scan a survey beacon to reveal the ring’s next location.",
      tactical: "Grappling Hook",
      tacticalImage: "../../assets/legendAbilities/pathfinder/pathfinderTactical2.png",
      tacticalCooldown: "15 seconds",
      tacticalDescription: "Grapple to get to out-of-reach places quickly.",
      ultimate: "Zipline Gun",
      ultimateImage: "../../assets/legendAbilities/pathfinder/pathfinderUltimate2.png",
      ultimateCooldown: "60 seconds",
      ultimateDescription: "Create a zipline for everyone to use.",
      abilityBackground: "../../assets/images/pathfinderBackground.png"
    },
    {
      name: "wraith",
      portrait: "../../assets/legendPortrait/wraithResizedPortrait.png",
      passive: "Voices from the Void",
      passiveImage: "../../assets/legendAbilities/wraith/wraithPassive2.png",
      passiveDescription: "A voice warns you when danger approaches. As far as you can tell, it’s on your side.",
      tactical: "Into the Void",
      tacticalImage: "../../assets/legendAbilities/wraith/wraithTactical2.png",
      tacticalCooldown: "20 seconds",
      tacticalDescription: "Reposition quickly through the safety of void space, avoiding all damage.",
      ultimate: "Dimensional Rift",
      ultimateImage: "../../assets/legendAbilities/wraith/wraithUltimate2.png",
      ultimateCooldown: "150 seconds",
      ultimateDescription: "Link two locations with portals for 60 seconds, allowing your entire team to use them.",
      abilityBackground: "../../assets/images/wraithBackground.png"
    },
  ];

  respawnPictures = [
    { 
      name: "bangalore",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bangalore-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bangalore-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bangalore-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bangalore-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bangalore-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "bloodhound",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bloodhound-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bloodhound-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bloodhound-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bloodhound-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bloodhound-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "caustic",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-caustic-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-caustic-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-caustic-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-caustic-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-caustic-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "gibraltar",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "lifeline",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-lifeline-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-lifeline-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-lifeline-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-lifeline-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-lifeline-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "mirage",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "pathfinder",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.1920w.jpg"
    },
    { 
      name: "wraith",
      smallest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.320w.jpg",
      small: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.768w.jpg",
      medium: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.1024w.jpg",
      large: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.1456w.jpg",
      largest: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.1920w.jpg"
    },
  ]

  legendLocation: number = this.legendList.indexOf(this.currentLegend);

  backwardLegendLocation: number = 0
  forwardLegendLocation: number = 0

  backwardLegend: string = ""
  forwardLegend: string = ""

  backwardLegendExists: boolean = true;
  forwardLegendExists: boolean = true;

  // this was done later to render based off url, probably can remove earlier legendService changes code in legendinfopage to reduce Code. 
  constructor(private router: Router) {
    console.log(this.router.url);
    if (this.currentLegend){
      return
    } else {
      let route = this.router.url;
      console.log(route)
      let routeArray = route.split("/");
      console.log(routeArray)
      let routeArrayLength = routeArray.length - 1;
      console.log(routeArrayLength)
      let routeLegend = routeArray[routeArrayLength];
      routeLegend = routeLegend.toLowerCase();
      console.log(routeLegend)
      if (this.legendList.indexOf(routeLegend) > -1){
        this.currentLegend = routeLegend;
        console.log(this.currentLegend)
        this.changeLegend(this.currentLegend);
      }
    }
  }

  changeLegend(legend: string) {
    this.currentLegend = legend;
    console.log(this.currentLegend)
    this.legendLocation = this.legendList.indexOf(this.currentLegend);

    this.backwardLegendLocation = this.legendList.indexOf(this.currentLegend) - 1;
    this.forwardLegendLocation = this.legendList.indexOf(this.currentLegend) + 1;

    if (this.backwardLegendLocation === -1){
      // change this to be last index of array legendList
      this.backwardLegend = "wraith"
      this.backwardLegendExists = true;
    } else {
      this.backwardLegend = this.legendDetails[this.backwardLegendLocation].name;
      this.backwardLegendExists = true;
    }

    if (this.forwardLegendLocation === this.legendList.length){
      // change this to be legendlist[0]
      this.forwardLegend = "bangalore"
      this.forwardLegendExists = true;
    } else {
      this.forwardLegend = this.legendDetails[this.forwardLegendLocation].name;
      this.forwardLegendExists = true;
    }
  }

}
