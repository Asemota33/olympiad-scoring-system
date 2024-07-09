import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DataGridComponent {
  selected = [];
  editUser: any;

  uncommitedUser: any;

  onDetailOpen(user: any) {
    this.uncommitedUser = JSON.parse(JSON.stringify(user));
  }

  save(user: any) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
    this.editUser = null;
  }

  toggleEdit(user: any, edit: any) {
    if (edit) {
      this.editUser = JSON.parse(JSON.stringify(user));
      setTimeout(function() {
        document.getElementById("firstInput")?.focus();
      }, 100);
    } else {
      this.save(user);
    }
  }

  users = [
    {
      id: 1,
      first_name: "Adan",
      last_name: "Issacson",
      email: "aissacson0@1und1.de"
    },
    {
      id: 2,
      first_name: "Evvy",
      last_name: "Fullard",
      email: "efullard1@so-net.ne.jp"
    },
    {
      id: 3,
      first_name: "Roseann",
      last_name: "Nickels",
      email: "rnickels2@sciencedaily.com"
    },
    {
      id: 4,
      first_name: "Isac",
      last_name: "Dachs",
      email: "idachs3@tinyurl.com"
    },
    {
      id: 5,
      first_name: "Roselle",
      last_name: "Sarfat",
      email: "rsarfat4@creativecommons.org"
    },
    {
      id: 6,
      first_name: "Chrissie",
      last_name: "Nunnerley",
      email: "cnunnerley5@adobe.com"
    },
    {
      id: 7,
      first_name: "Lona",
      last_name: "Jarmaine",
      email: "ljarmaine6@homestead.com"
    },
    {
      id: 8,
      first_name: "Toddy",
      last_name: "Thorrington",
      email: "tthorrington7@stanford.edu"
    },
    {
      id: 9,
      first_name: "Danita",
      last_name: "Bromhead",
      email: "dbromhead8@cocolog-nifty.com"
    },
    {
      id: 10,
      first_name: "Richy",
      last_name: "Loeber",
      email: "rloeber9@pbs.org"
    },
    {
      id: 11,
      first_name: "Izzy",
      last_name: "Paolacci",
      email: "ipaolaccia@cloudflare.com"
    },
    {
      id: 12,
      first_name: "Viv",
      last_name: "Radley",
      email: "vradleyb@dagondesign.com"
    },
    {
      id: 13,
      first_name: "Huey",
      last_name: "Simcock",
      email: "hsimcockc@fc2.com"
    },
    {
      id: 14,
      first_name: "Larissa",
      last_name: "Jarrelt",
      email: "ljarreltd@bizjournals.com"
    },
    {
      id: 15,
      first_name: "Brook",
      last_name: "Yerrington",
      email: "byerringtone@elegantthemes.com"
    },
    {
      id: 16,
      first_name: "Jim",
      last_name: "Butrimovich",
      email: "jbutrimovichf@digg.com"
    },
    {
      id: 17,
      first_name: "Iggie",
      last_name: "Mainwaring",
      email: "imainwaringg@nbcnews.com"
    },
    {
      id: 18,
      first_name: "Morse",
      last_name: "Scandrite",
      email: "mscandriteh@prlog.org"
    },
    {
      id: 19,
      first_name: "Allyce",
      last_name: "Benyan",
      email: "abenyani@php.net"
    },
    {
      id: 20,
      first_name: "Carla",
      last_name: "Allberry",
      email: "callberryj@squidoo.com"
    },
    {
      id: 21,
      first_name: "Wilt",
      last_name: "Clulow",
      email: "wclulowk@smugmug.com"
    },
    {
      id: 22,
      first_name: "Kasper",
      last_name: "Butner",
      email: "kbutnerl@elegantthemes.com"
    },
    {
      id: 23,
      first_name: "Fredericka",
      last_name: "Sall",
      email: "fsallm@blog.com"
    },
    {
      id: 24,
      first_name: "Moore",
      last_name: "Krout",
      email: "mkroutn@freewebs.com"
    },
    {
      id: 25,
      first_name: "Linn",
      last_name: "Spenclay",
      email: "lspenclayo@google.es"
    },
    {
      id: 26,
      first_name: "Darcey",
      last_name: "Peacham",
      email: "dpeachamp@addtoany.com"
    },
    {
      id: 27,
      first_name: "Selestina",
      last_name: "Dace",
      email: "sdaceq@archive.org"
    },
    {
      id: 28,
      first_name: "Earle",
      last_name: "Taylder",
      email: "etaylderr@dailymail.co.uk"
    },
    {
      id: 29,
      first_name: "Neill",
      last_name: "O'Kielt",
      email: "nokielts@joomla.org"
    },
    {
      id: 30,
      first_name: "Jock",
      last_name: "Berrow",
      email: "jberrowt@etsy.com"
    },
    {
      id: 31,
      first_name: "Nanice",
      last_name: "Alexsandrowicz",
      email: "nalexsandrowiczu@ucoz.ru"
    },
    {
      id: 32,
      first_name: "Lucius",
      last_name: "Bruckent",
      email: "lbruckentv@theglobeandmail.com"
    },
    {
      id: 33,
      first_name: "Shellysheldon",
      last_name: "Oswell",
      email: "soswellw@twitter.com"
    },
    {
      id: 34,
      first_name: "Eimile",
      last_name: "Skewes",
      email: "eskewesx@dailymotion.com"
    },
    {
      id: 35,
      first_name: "Fenelia",
      last_name: "Okey",
      email: "fokeyy@exblog.jp"
    },
    {
      id: 36,
      first_name: "Juline",
      last_name: "Moar",
      email: "jmoarz@linkedin.com"
    },
    {
      id: 37,
      first_name: "Tanya",
      last_name: "Yitzovitz",
      email: "tyitzovitz10@webmd.com"
    },
    {
      id: 38,
      first_name: "Jamima",
      last_name: "Pyett",
      email: "jpyett11@uiuc.edu"
    },
    {
      id: 39,
      first_name: "Nikki",
      last_name: "Wodham",
      email: "nwodham12@wsj.com"
    },
    {
      id: 40,
      first_name: "Emalee",
      last_name: "Checcuzzi",
      email: "echeccuzzi13@istockphoto.com"
    },
    {
      id: 41,
      first_name: "Ruy",
      last_name: "Sprey",
      email: "rsprey14@bluehost.com"
    },
    {
      id: 42,
      first_name: "Fraser",
      last_name: "Haken",
      email: "fhaken15@un.org"
    },
    {
      id: 43,
      first_name: "Tiffani",
      last_name: "Lux",
      email: "tlux16@scientificamerican.com"
    },
    {
      id: 44,
      first_name: "Maddi",
      last_name: "Valintine",
      email: "mvalintine17@cargocollective.com"
    },
    {
      id: 45,
      first_name: "Thekla",
      last_name: "Rummins",
      email: "trummins18@facebook.com"
    },
    {
      id: 46,
      first_name: "Bonni",
      last_name: "Scoyles",
      email: "bscoyles19@posterous.com"
    },
    {
      id: 47,
      first_name: "Gustav",
      last_name: "Showte",
      email: "gshowte1a@abc.net.au"
    },
    {
      id: 48,
      first_name: "Natalie",
      last_name: "Wride",
      email: "nwride1b@ihg.com"
    },
    {
      id: 49,
      first_name: "Antonino",
      last_name: "Moreno",
      email: "amoreno1c@naver.com"
    },
    {
      id: 50,
      first_name: "Gunilla",
      last_name: "Deerr",
      email: "gdeerr1d@umich.edu"
    }
  ];
}
