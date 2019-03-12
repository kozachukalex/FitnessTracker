import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  weaponTypes = ["assault rifle", "lightmachine gun", "pistol", "shotgun", "sniper rifle", "submachine gun"]

  weaponDetails = {
    assaultRifle: {
      hemlok: {
        name: "Hemlok Burst AR",
        ammoType: "heavy",
        fireRate: "burst, single",
        magazineSize: "18",
        bodyDamage: "18",
        headshotDamage: "36",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/assaultrifle/hemlok.png"
      },
      carbine: {
        name: "R-301",
        ammoType: "light",
        fireRate: "auto, single",
        magazineSize: "18",
        bodyDamage: "14",
        headshotDamage: "28",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/assaultrifle/r301.png"
      },
      flatline: {
        name: "VK-47 Flatline",
        ammoType: "heavy",
        fireRate: "auto, single",
        magazineSize: "20",
        bodyDamage: "16",
        headshotDamage: "32",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/assaultrifle/flatline.png"
      }
    },
    lightmachineGun: {
      spitfire: {
        name: "M6000 Spitfire",
        ammoType: "heavy",
        fireRate: "auto",
        magazineSize: "35",
        bodyDamage: "20",
        headshotDamage: "40",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/lmg/spitfire.png"
      },
      devotion: {
        name: "Devotion",
        ammoType: "energy",
        fireRate: "auto",
        magazineSize: "44",
        bodyDamage: "17",
        headshotDamage: "34",
        hop: "turbocharger",
        location: "Standard",
        image: "../assets/weapons/lmg/devotion.png"
      },
    },
    pistol: {
      wingman: {
        name: "Wingman",
        ammoType: "heavy",
        fireRate: "single",
        magazineSize: "6",
        bodyDamage: "45",
        headshotDamage: "90",
        hop: "skullpiercer",
        location: "Standard",
        image: "../assets/weapons/pistol/wingman.png"
      },
      mozambique: {
        name: "Mozambique",
        ammoType: "shotgun",
        fireRate: "single",
        magazineSize: "3",
        bodyDamage: "45",
        headshotDamage: "66",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/pistol/mozambique.png"
      },
      p2020: {
        name: "P2020",
        ammoType: "light",
        fireRate: "single",
        magazineSize: "10",
        bodyDamage: "12",
        headshotDamage: "18",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/pistol/p2020.png"
      },
      re45auto: {
        name: "RE-45 Auto",
        ammoType: "light",
        fireRate: "auto",
        magazineSize: "15",
        bodyDamage: "11",
        headshotDamage: "16",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/pistol/re45.png"
      },
    },
    shotgun: {
      mastiff: {
        name: "Mastiff",
        ammoType: "special",
        fireRate: "single",
        magazineSize: "4",
        bodyDamage: "144",
        headshotDamage: "288",
        hop: "none",
        location: "Supply Pods",
        image: "../assets/weapons/shotgun/mastiff.png"
      },
      peacekeeper: {
        name: "Peacekeeper",
        ammoType: "shotgun",
        fireRate: "Pump-Action",
        magazineSize: "6",
        bodyDamage: "110",
        headshotDamage: "165",
        hop: "precision choke",
        location: "Standard",
        image: "../assets/weapons/shotgun/peacekeeper.png"
      },
      eva: {
        name: "EVA-9 Auto",
        ammoType: "shotgun",
        fireRate: "auto",
        magazineSize: "8",
        bodyDamage: "63",
        headshotDamage: "90",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/shotgun/eva.png"
      },
    },
    sniperRifle: {
      kraber: {
        name: "Kraber .50-Cal",
        ammoType: "special",
        fireRate: "Bolt-Action",
        magazineSize: "4",
        bodyDamage: "125",
        headshotDamage: "250",
        hop: "none",
        location: "Supply Pods",
        image: "../assets/weapons/snipers/kraber.png"
      },
      triple: {
        name: "Triple Take",
        ammoType: "energy",
        fireRate: "single",
        magazineSize: "5",
        bodyDamage: "69",
        headshotDamage: "138",
        hop: "precision choke",
        location: "Standard",
        image: "../assets/weapons/snipers/triple.png"
      },
      longbow: {
        name: "Longbow DMR",
        ammoType: "heavy",
        fireRate: "single",
        magazineSize: "5",
        bodyDamage: "55",
        headshotDamage: "110",
        hop: "skullpiercer",
        location: "Standard",
        image: "../assets/weapons/snipers/longbow.png"
      },
      scout: {
        name: "G7 Scout",
        ammoType: "light",
        fireRate: "single",
        magazineSize: "10",
        bodyDamage: "30",
        headshotDamage: "60",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/snipers/scout.png"
      },
    },
    submachineGun: {
      prowler: {
        name: "Prowler",
        ammoType: "heavy",
        fireRate: "burst",
        magazineSize: "20",
        bodyDamage: "14",
        headshotDamage: "21",
        hop: "select fire",
        location: "Standard",
        image: "../assets/weapons/smg/prowler.png"
      },
      alternator: {
        name: "Alternator",
        ammoType: "light",
        fireRate: "auto",
        magazineSize: "16",
        bodyDamage: "13",
        headshotDamage: "19",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/smg/alternator.png"
      },
      r99: {
        name: "R-99",
        ammoType: "light",
        fireRate: "auto",
        magazineSize: "18",
        bodyDamage: "12",
        headshotDamage: "18",
        hop: "none",
        location: "Standard",
        image: "../assets/weapons/smg/r99.png"
      },
    }
  }

  weaponTypeButtons = [
    {
      type: "assault rifle",
      buttonImage: "../assets/weapons/assaultrifle/assaultrifleButton.png"
    },
    {
      type: "lightmachine gun",
      buttonImage: "../assets/weapons/lmg/lightmachinegunButton.png"
    },
    {
      type: "pistol",
      buttonImage: "../assets/weapons/pistol/pistolButton.png"
    },
    {
      type: "shotgun",
      buttonImage: "../assets/weapons/shotgun/shotgunButton.png"
    },
    {
      type: "sniper rifle",
      buttonImage: "../assets/weapons/snipers/sniperrifleButton.png"
    },
    {
      type: "submachine gun",
      buttonImage: "../assets/weapons/smg/submachinegunButton.png"
    },

  ]

  currentType: string = "";
  currentTypeRoute: string = "";
  currentWeapon: string = "";
  weaponKeys;

  constructor(private router: Router) {
    //Purpose of this router constructor is to allow a user to type in a url and correctly parse and set current services according to the route. This allows a user to return to a specific URL to see relevent information and remove needing to click everything each visit.
    let route = this.router.url;
    console.log(route)
    let routeArray = route.split("/");
    console.log(routeArray)
    if (routeArray.length > 2) {
      this.currentTypeRoute = routeArray[2];
      let type = routeArray[2];
      type = type.replace("%20", " ");
      let typeArray = type.split(" ");
      let newType = typeArray[0] + typeArray[1].charAt(0).toUpperCase() + typeArray[1].slice(1);
      this.currentType = newType;
      console.log(this.currentTypeRoute);
      this.updateType(this.currentType);
      if (routeArray.length > 3) {
        if (!this.currentWeapon) {
          this.currentWeapon = routeArray[3];
          console.log(this.currentWeapon);
        } else {
          return
        }
      } else {
        return;
      }
    } else {
      return
    }
  }

  updateType(type) {
    console.log(type);
    let selection = type.split(" ");
    if (selection[1]) {
      let newTypeRoute = selection[0] + " " + selection[1];
      let newType = selection[0] + selection[1].charAt(0).toUpperCase() + selection[1].slice(1);
      console.log(newType);
      this.currentTypeRoute = newTypeRoute;
      this.currentType = newType;
    } else {
      this.currentType = type;
    }
    console.log(selection);
    this.weaponKeys = Object.keys(this.weaponDetails[this.currentType])
    console.log(this.currentType);
    this.currentWeapon = "";
  }
  updateWeapon(weapon) {
    this.currentWeapon = weapon;
    console.log(this.currentWeapon);
    console.log(this.weaponDetails[this.currentType][this.currentWeapon])
  }
}
