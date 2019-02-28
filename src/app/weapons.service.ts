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
        location: "Standard"
      },
      carbine: {
        name: "R-301",
        ammoType: "light",
        fireRate: "auto, single",
        magazineSize: "18",
        bodyDamage: "14",
        headshotDamage: "28",
        hop: "none",
        location: "Standard"
      },
      flatline: {
        name: "VK-47 Flatline",
        ammoType: "heavy",
        fireRate: "auto, single",
        magazineSize: "20",
        bodyDamage: "16",
        headshotDamage: "32",
        hop: "none",
        location: "Standard"
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
        location: "Standard"
      },
      devotion: {
        name: "Devotion",
        ammoType: "energy",
        fireRate: "auto",
        magazineSize: "44",
        bodyDamage: "17",
        headshotDamage: "34",
        hop: "turbocharger",
        location: "Standard"
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
        location: "Standard"
      },
      mozambique: {
        name: "Mozambique",
        ammoType: "shotgun",
        fireRate: "single",
        magazineSize: "3",
        bodyDamage: "45",
        headshotDamage: "66",
        hop: "none",
        location: "Standard"
      },
      p2020: {
        name: "P2020",
        ammoType: "light",
        fireRate: "single",
        magazineSize: "10",
        bodyDamage: "12",
        headshotDamage: "18",
        hop: "none",
        location: "Standard"
      },
      re45auto: {
        name: "RE-45 Auto",
        ammoType: "light",
        fireRate: "auto",
        magazineSize: "15",
        bodyDamage: "11",
        headshotDamage: "16",
        hop: "none",
        location: "Standard"
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
        location: "Supply Pods"
      },
      peacekeeper: {
        name: "Peacekeeper",
        ammoType: "shotgun",
        fireRate: "Pump-Action",
        magazineSize: "6",
        bodyDamage: "110",
        headshotDamage: "165",
        hop: "precision choke",
        location: "Standard"
      },
      eva: {
        name: "EVA-9 Auto",
        ammoType: "shotgun",
        fireRate: "auto",
        magazineSize: "8",
        bodyDamage: "63",
        headshotDamage: "90",
        hop: "none",
        location: "Standard"
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
        location: "Supply Pods"
      },
      triple: {
        name: "Triple Take",
        ammoType: "energy",
        fireRate: "single",
        magazineSize: "5",
        bodyDamage: "69",
        headshotDamage: "138",
        hop: "precision choke",
        location: "Standard"
      },
      longbow: {
        name: "Longbow DMR",
        ammoType: "heavy",
        fireRate: "single",
        magazineSize: "5",
        bodyDamage: "55",
        headshotDamage: "110",
        hop: "skullpiercer",
        location: "Standard"
      },
      scout: {
        name: "G7 Scout",
        ammoType: "light",
        fireRate: "single",
        magazineSize: "10",
        bodyDamage: "30",
        headshotDamage: "60",
        hop: "none",
        location: "Standard"
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
        location: "Standard"
      },
      alternator: {
        name: "Alternator",
        ammoType: "light",
        fireRate: "auto",
        magazineSize: "16",
        bodyDamage: "13",
        headshotDamage: "19",
        hop: "none",
        location: "Standard"
      },
      r99: {
        name: "R-99",
        ammoType: "light",
        fireRate: "auto",
        magazineSize: "18",
        bodyDamage: "12",
        headshotDamage: "18",
        hop: "none",
        location: "Standard"
      },
    }
  }

  currentType: string = "";
  currentWeapon: string = "";
  weaponKeys;

  constructor(private router: Router) {
    let route = this.router.url;
    console.log(route)
    let routeArray = route.split("/");
    console.log(routeArray)
    if (routeArray.length > 2) {
      this.currentType = routeArray[2];
      console.log(this.currentType);
      if (routeArray.length > 3) {
        this.currentWeapon = routeArray[3];
        console.log(this.currentWeapon)
      } else {
        return;
      }
    } else {
      return
    }
  }
  updateType(type) {
    console.log(type);
    let test = type.split(" ");
    if (test[1]) {
      let newType = test[0] + test[1].charAt(0).toUpperCase() + test[1].slice(1);
      console.log(newType);
      this.currentType = newType;
    } else {
      this.currentType = type;
    }
    console.log(test);
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
