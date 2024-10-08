function lvUp(hero, details) {
    const [dungeonLevel, location, multiplier] = details;
    const expGained = ((dungeonLevel + 1) + (location + 1)) * multiplier;
    hero.exp += expGained;
  
    if (hero.exp >= 100) {
      hero.lv += 1;
      hero.exp -= 100; 
    }
  
    return hero;
  }
  
  function battle(enemy, hero) {
    while (hero.hp > 0 && enemy.health > 0) {
      
      enemy.health -= hero.atk;
  
      
      if (enemy.health <= 0) break;
  
      
      const damage = Math.round(enemy.dpa * (100 / (100 + hero.def)));
      hero.hp -= damage;
    }
  
    return hero.hp > 0 ? hero : "Game Over!";
  }
  
  function gameOn(map, challenger) {
    let player = {
      name: challenger[0],
      hp: challenger[1],
      atk: challenger[2],
      def: challenger[3],
      exp: challenger[4],
      lv: challenger[5]
    };
  
    const mob = { health: 11, dpa: 3 };
    const boss = { health: 25, dpa: 10 };
  
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        let cell = map[i][j];
  
        if (cell === "*") {
          player = battle(mob, player);
          if (player === "Game Over!") return "Game Over!";
          player = lvUp(player, [i, j, 5]); 
        } 
        else if (cell === "B") {
          player = battle(boss, player);
          if (player === "Game Over!") return "Game Over!";
          player = lvUp(player, [i, j, 25]); 
        } 
        else if (cell === "+") {
          player = lvUp(player, [i, j, 15]); 
        } 
        else if (cell === "-") {
          player.hp -= 10; 
          if (player.hp <= 0) return "Game Over!";
        }
      }
    }
  
    return `Your hero named ${player.name} has won the game with level ${player.lv}!`;
  }
  
  
  let dungeon1 = [
    ["*" , "" , "+" , "-" , "*"],
    ["*", "*", "", "*", "+", "+", "*"],
    ["B", "*"]
  ];
  
  let player1 = [
    "Lance", 40, 8, 5, 0, 1
  ];
  console.log(gameOn(dungeon1, player1)); 
  
  let dungeon2 = [
    ["*", "*", "", "-", "+", "+", "*"],
    ["*" , "*" , "+" , "" , "*"],
    ["", "*", "B"]
  ];
  
  let player2 = [
    "Astra", 100, 10, 8, 0, 5
  ];
  console.log(gameOn(dungeon2, player2)); 
  