const DrawCard = require('../../drawcard.js');

class ShinjoOutrider extends DrawCard {
    setupCardAbilities() {
        this.action({
            title: 'Move this character to conflict',
            condition: () => this.game.currentConflict && this.allowGameAction('moveToConflict'),
            handler: () => {
                this.game.addMessage('{0} moves {1} to the conflict by using its ability', this.controller, this);
                this.game.currentConflict.moveToConflict(this,this.game.currentConflict.attackingPlayer === this.controller);
            }
        });
    }
}

ShinjoOutrider.id = 'shinjo-outrider';

module.exports = ShinjoOutrider;
