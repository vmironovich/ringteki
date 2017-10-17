const DrawCard = require('../../drawcard.js');

class DojiHotaru extends DrawCard {
    setupCardAbilities() {
        this.reaction({
            when: {
                onClaimRing: event => event.conflict && event.conflict.isParticipating(this) && event.conflict.conflictType === 'political'
            },
            handler: context => {
                this.game.addMessage('{0} uses {1} to resolve the ring\'s effect again', this.controller, this);
                context.event.conflict.resolveRingEffects();
            }
        });
    }
}

DojiHotaru.id = 'doji-hotaru';

module.exports = DojiHotaru;
