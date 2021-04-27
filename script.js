for (let i = 0; i < document.getElementsByClassName('default-option').length; i++) {
  document.getElementsByClassName('default-option')[i].selected = true;
}

function getFactionName() {
  return document.getElementById('factions').value;
}
function getFactionsCount() {
  return document.getElementById('factions').length;
}
function selectAllStratagems() {
  return document.getElementsByClassName('stratagems-block__show-when-faction-unselected');
}

function hideFactionAddendumBlocks() {
  // var get_default_option = document.getElementById('factions-addendum').getElementsByClassName('default-option');
  var get_addendum_select_blocks = document.getElementById('factions-addendum').getElementsByTagName('select');

  /* for (let i = 0; i < get_default_option.length; i++) {
    get_default_option[i].selected = true;
  } */

  for (let i = 0; i < get_addendum_select_blocks.length; i++) {;
    get_addendum_select_blocks[i].style.display = 'none';
  }

  document.getElementById('factions-addendum').style.display = 'none';
  document.getElementById('space-marines-check').style.display = 'none';
  // document.getElementById('chaos-daemons-allegiance').style.display = 'none';
}

// function hideAllFactionsStratagemsBlocks(param) {
function hideAllFactionsStratagemsBlocks() {
  var stratagems_blocks = document.getElementsByClassName('stratagems-block');
  // for (let i = 0; i < param; i++) {
  for (let i = 0; i < stratagems_blocks.length; i++) {
    stratagems_blocks[i].style.display = 'none';
  }
  document.getElementById('message').style.display = 'none';
}

function hideAllFactionStratagems() {
  var all_stratagems = document.getElementsByClassName('stratagems-block__show-when-faction-unselected');
  for (let i = 0; i < all_stratagems.length; i++) {
    all_stratagems[i].style.display = 'none';
  }
}

function uncheckCheckMarks() {
  var phases_check = document.getElementById('game-phases').querySelectorAll('.check');
  for (let i = 0; i < phases_check.length; i++) { 
    if (phases_check[i].checked == true) {
      phases_check[i].checked = false;
    }
  }
}

function checkMarksDefaultStyle() {
  var default_bgc = '#fff';
  var default_text_color = '#333'
  var phases_label = document.getElementById('game-phases').getElementsByTagName('label');
  for (let i = 0; i < phases_label.length; i++) { 
    phases_label[i].style.backgroundColor = default_bgc;
    phases_label[i].style.color = default_text_color;
    phases_label[i].style.borderRadius = '0px';
  }
}

function setDefaultFactionAddendumOption() {
  var get_default_option = document.getElementById('factions-addendum').getElementsByClassName('default-option');

  for (let i = 0; i < get_default_option.length; i++) {
    get_default_option[i].selected = true;
  }
}

function showFactionAddendumBlock(faction_name) {
  hideFactionAddendumBlocks();

  switch (faction_name) {
    case 'chaos-daemons':
      document.getElementById('factions-addendum').style.display = 'flex';
      document.getElementById('chaos-daemons-allegiance').style.display = 'block';
      break;
    case 'orks':
      document.getElementById('factions-addendum').style.display = 'flex';
      document.getElementById('orks-addendum-select').style.display = 'block';
      break;
    case value:
      
      break;
    case value:
      
      break;
  
    default:
      break;
  }
  

  /* if (faction_name == 'chaos-daemons') {
    document.getElementById('factions-addendum').style.display = 'flex';
    document.getElementById('chaos-daemons-allegiance').style.display = 'block';
  } */

  /* if (document.getElementById('selected-chapter').checked == true) {
    document.getElementById('space-marines').style.backgroundColor = '#60c';
    document.getElementById('space-marines').style.color = '#fff';
    a.style.display = 'none';
    for (let i = 0; i < z.length; i++) {
      q[i].style.display = 'none';
    }
  } else {
    document.getElementById('space-marines').style.backgroundColor = '#fff';
    document.getElementById('space-marines').style.color = '#333';
    a.style.display = 'block';
    for (let i = 0; i < z.length; i++) {
      q[i].style.display = 'block';
    }
  }
  document.getElementById('space-marines').style.transitionDuration = '400ms'; */
}

function showDaemonAllegianceStratagems() {
  var daemons_allegiance_stratagems;
  var allegiance = document.getElementById('chaos-daemons-allegiance').value;
  var stratagems_for_all_allegiance = document.getElementsByClassName('all-daemons-stratagem');
  var chaos_daemons_all_stratagems = document.getElementById('chaos-daemons').getElementsByClassName('stratagems-block__show-when-faction-unselected');
  
  uncheckCheckMarks();
  checkMarksDefaultStyle();  
  hideAllFactionStratagems();

  if (allegiance != 'unaligned') {
    daemons_allegiance_stratagems = document.getElementsByClassName(allegiance + '-daemons-stratagem');

    document.getElementById('chaos-daemons').style.display = 'block';

    if (daemons_allegiance_stratagems.length > 0) {
      for (let i = 0; i < daemons_allegiance_stratagems.length; i++) {
        daemons_allegiance_stratagems[i].style.display = 'block';        
      }
    }

    // Show all Daemons Allegiance stratagems
    if (stratagems_for_all_allegiance.length > 0) {
      for (let i = 0; i < stratagems_for_all_allegiance.length; i++) {
        stratagems_for_all_allegiance[i].style.display = 'block';
      }
    }
  } else {
    // showFactionStratagems();
    if (chaos_daemons_all_stratagems.length > 0) {
      document.getElementById('chaos-daemons').style.display = 'block';

      for (let i = 0; i < chaos_daemons_all_stratagems.length; i++) {
        chaos_daemons_all_stratagems[i].style.display = 'block';
      }
    }
  }
}

// --- Orks ---

// Get Orks CLAN name
function orksClanName() {
  return document.getElementById('orks-addendum-select').value;
}
// Get all Orks CLANs stratagems
function orksAllClansStratagems() {
  return document.getElementById('orks').getElementsByClassName('orks-clan-stratagem');
}
// Get all Orks stratagems
function orksAllStratagems() {
  return document.getElementById('orks').getElementsByClassName('orks-stratagem');
}
// Get all Orks specific CLAN stratagems
function orksSpecificClansStratagems() {
  var orks_clan_name = orksClanName();
  return document.getElementById('orks').getElementsByClassName('orks-' + orks_clan_name + '-stratagem');
}

/**
 * Show Orks CLAN stratagems
 */
function showOrksClanStratagems() {
  // Orks CLAN name/value
  var orks_clan = orksClanName();

  // Select all Orks CLANs stratagems
  var all_orks_clan_spc_strt = orksAllClansStratagems();

  // Select all Orks stratagems
  var all_orks_stratagems = orksAllStratagems();

  // Select specific CLAN stratagems
  var orks_clan_stratagems;

  uncheckCheckMarks();
  checkMarksDefaultStyle();
  document.getElementById('orks').style.display = 'block';

  // --- Filter Orks stratagems including CLAN specific stratagems
  // Show all Orks stratagems
  for (let i = 0; i < all_orks_stratagems.length; i++) {
    all_orks_stratagems[i].style.display = 'block';
  }

  // Hide all CLAN stratagems
  if (all_orks_clan_spc_strt.length > 0) {
    for (let i = 0; i < all_orks_clan_spc_strt.length; i++) {
      all_orks_clan_spc_strt[i].style.display = 'none';
    }
  }

  if (orks_clan != 'no-clan') { // Show all Orks & CLAN specific stratagems
    orks_clan_stratagems = orksSpecificClansStratagems();

    // Show CLAN specific stratagems
    if (orks_clan_stratagems.length > 0) {
      for (let i = 0; i < orks_clan_stratagems.length; i++) {
        orks_clan_stratagems[i].style.display = 'block';
      }
    }
  }
}

function showFactionStratagems() {
  var faction = getFactionName();

  // set default style to stratagems select option
  checkMarksDefaultStyle();
  // Set "display" to "none" for all stratagems of all factions
  hideAllFactionsStratagemsBlocks();

  // hideFactionAddendumBlocks();
  showFactionAddendumBlock(faction);

  if (faction == 'chaos-daemons') {
    showDaemonAllegianceStratagems();
  } else if (faction == 'orks') {
    showOrksClanStratagems();
  } else {  
    // remove :checked from stratagems select option
    uncheckCheckMarks();

    // showFactionAddendumBlock(faction);
  
    // Show all selected faction stratagems
    if (faction != '-- Select a Faction --') {
      var stratagems_str = 'stratagems-block__show-when-faction-unselected';
  
      if (document.getElementById(faction) == null) {
        document.getElementById('message').innerHTML = 'Coming soon ;)';
        document.getElementById('game-phases').style.display = 'none';
        return document.getElementById('message').style.display = 'block';
      }
  
      var faction_all_stratagems_select = document.getElementById(faction).querySelectorAll('.'+stratagems_str);
  
      if (faction_all_stratagems_select.length <= 0) {
        document.getElementById('message').innerHTML = 'Coming soon ;)';
        document.getElementById('message').style.display = 'block';
      } else {
        for (let i = 0; i < faction_all_stratagems_select.length; i++) {
          faction_all_stratagems_select[i].style.display = 'block';
        }
      }

      document.getElementById(faction).style.display = "block";
    }
  
    if (document.getElementById('game-phases').style.display == 'none') {
      document.getElementById('game-phases').style.display = 'flex';
    }
  }
}

/**
 * Show all stratagems of selected phase
 * @param {string} faction_name 
 * @param {string} stratagem_type 
 * @param {int} phase_index 
 */
function showPhaseStratagems(faction_name, stratagem_type, phase_index) {
  var daemon_allegiance, show_stratagems, hide_stratagems;
  // var selected_stratagem_type = document.getElementById('');
  var scroll_to_view_str = '.scroll-to-view';

  checkMarksDefaultStyle();

  document.getElementById('message').style.display = 'none';

  // Change stratagem_type style when checked
  switch (stratagem_type) {
    case '.before-battle':
      document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.backgroundColor = '#667070';
      break;
    case '.opponent-phase':
      document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.backgroundColor = '#960000';
      break;
    case '.morale-phase':
      document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.backgroundColor = '#248f8f';
      break;
    case '.fight-phase':
      document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.backgroundColor = '#248f8f';
      break;
    default:
      document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.backgroundColor = '#2e912e';
      break;
  }
  document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.borderRadius = '10px';
  document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.color = '#fff';
  document.getElementById('game-phases').getElementsByTagName('label')[phase_index].style.transitionDuration = '400ms';

  // Show/Hide stratagems of checked type
  if (faction_name != '-- Select a Faction --') {
    // Select stratagems to hide
    hide_stratagems = document.getElementById(faction_name).querySelectorAll('.stratagems-block__show-when-faction-unselected');

    // Hide all faction stratagems
    for (let i = 0; i < hide_stratagems.length; i++) {
      hide_stratagems[i].style.display = 'none';
    }

    // --- Chaos Daemons ---
    if (faction_name == 'chaos-daemons') {
      // var daemon_allegiance = '';
      daemon_allegiance = document.getElementById('chaos-daemons-allegiance').value;

      if (daemon_allegiance != 'unaligned') {
        // uncheckCheckMarks();
        switch (stratagem_type) {
          case '.before-battle':
            stratagem_type = '.' + daemon_allegiance + '-daemons-before-battle';
            break;
          case '.command-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-command-phase';
            break;
          case '.movement-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-movement-phase';
            break;
          case '.psychic-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-psychic-phase';
            break;
          case '.shooting-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-shooting-phase';
            break;
          case '.charge-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-charge-phase';
            break;
          case '.fight-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-fight-phase';
            break;
          case '.morale-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-morale-phase';
            break;
          case '.opponent-phase':
            stratagem_type = '.' + daemon_allegiance + '-daemons-opponent-phase';
            break;
        
          default:
            break;
        }
      }
    }

    // Select stratagems to show
    show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);

    if (show_stratagems.length > 0) {
      if (stratagem_type != '.before-battle' && stratagem_type != '.' + daemon_allegiance + '-daemons-before-battle') {
        // Show faction phase stratagems
        for (let i = 0; i < show_stratagems.length; i++) {
          show_stratagems[i].style.display = 'block';
        }

        // --- Chaos Daemons ---
        if (faction_name == 'chaos-daemons' && daemon_allegiance != 'unaligned') {
          var daemon_phase_string = stratagem_type.replace('.' + daemon_allegiance + '-daemons','');

          // Change stratagem type to ".all-daemons-<phase_name>"
          stratagem_type = '.all-daemons' + daemon_phase_string;

          show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);

          // Show all ".all-daemons-<phase_name>" stratagems
          if (show_stratagems.length > 0) {
            for (let i = 0; i < show_stratagems.length; i++) {
              show_stratagems[i].style.display = 'block';
            }
          }

          // Change stratagem type to ".<daemon-allegiance>-daemons-any-phase"
          stratagem_type = '.' + daemon_allegiance + '-daemons-any-phase';
          show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);
  
          // Show all ".<daemon-allegiance>-daemons-any-phase"
          if (show_stratagems.length > 0) {
            for (let i = 0; i < show_stratagems.length; i++) {
              show_stratagems[i].style.display = 'block';
            }
          }
  
          stratagem_type = '.all-daemons-any-phase';
        } else {
          // Change stratagem type to '.any-phase'
          stratagem_type = '.any-phase';
        }
        
        show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);

        // Show all '.any-phase' stratagems
        if (show_stratagems.length > 0) {
          for (let i = 0; i < show_stratagems.length; i++) {
            show_stratagems[i].style.display = 'block';
          }
        }

        // Scroll to first stratagem of the selected phase
        document.getElementById(faction_name).querySelector(scroll_to_view_str).scrollIntoView();
      } else {
        // Show faction phase stratagems
        for (let i = 0; i < show_stratagems.length; i++) {
          show_stratagems[i].style.display = 'block';
        }

        // --- Chaos Daemons ---
        if (faction_name == 'chaos-daemons') {
          stratagem_type = '.all-daemons-before-battle';
          show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);
          
          if (show_stratagems.length > 0) {
            for (let i = 0; i < show_stratagems.length; i++) {
              show_stratagems[i].style.display = 'block';
            }
          }
        }

        // Scroll to first stratagem of the selected phase
        document.getElementById(faction_name).querySelector(scroll_to_view_str).scrollIntoView();
      }
    } else if (stratagem_type != '.before-battle' && stratagem_type != '.' + daemon_allegiance + '-daemons-before-battle') {
      // show_stratagems = document.getElementById(faction_name).querySelectorAll('.any-phase');
      
      // --- Chaos Daemons ---
      if (faction_name == 'chaos-daemons' && daemon_allegiance != 'unaligned') {
        var daemon_phase_string = stratagem_type.replace('.' + daemon_allegiance + '-daemons','');

        // Change stratagem type to ".all-daemons-<phase_name>"
        stratagem_type = '.all-daemons' + daemon_phase_string;

        show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);

        // Show all ".all-daemons-<phase_name>" stratagems
        if (show_stratagems.length > 0) {
          for (let i = 0; i < show_stratagems.length; i++) {
            show_stratagems[i].style.display = 'block';
          }
        }

        stratagem_type = '.' + daemon_allegiance + '-daemons-any-phase';
        show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);
        
        // Show all ".<daemon_allegiance-daemons-any-phase>" stratagems
        if (show_stratagems.length > 0) {
          selected_stratagem_type = stratagem_type;
          for (let i = 0; i < show_stratagems.length; i++) {
            show_stratagems[i].style.display = 'block';
          }
        }
        stratagem_type = '.all-daemons-any-phase';
        // --- --- ---

      } else {
        stratagem_type = '.any-phase';
      }

      show_stratagems = document.getElementById(faction_name).querySelectorAll(stratagem_type);

      if (show_stratagems.length > 0) {
        // Show all stratagems with '...any-phase' in the name
        for (let i = 0; i < show_stratagems.length; i++) {
          show_stratagems[i].style.display = 'block';
        }
        
        // --- Chaos Daemons ---
        // if (faction_name == 'chaos-daemons' && selected_stratagem_type != null) {
        //   document.getElementById(faction_name).querySelector(scroll_to_view_str).scrollIntoView();
        // }
        
        // Scroll to first stratagem of the selected phase
        document.getElementById(faction_name).querySelector(scroll_to_view_str).scrollIntoView();
      } else {
        document.getElementById('message').innerHTML = 'No stratagems found!';
        document.getElementById('message').style.display = 'block';
      }
    } else /* if (stratagem_type == '.before-battle') */ {
      document.getElementById('message').innerHTML = 'No stratagems found!';
      document.getElementById('message').style.display = 'block';
    }
  }
}

// Debug
function debug(param = []) {
  return document.getElementById('value').innerHTML = param;
}