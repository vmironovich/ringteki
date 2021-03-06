class BaseCardSelector {
    constructor(properties) {
        this.cardCondition = properties.cardCondition;
        this.cardType = properties.cardType;
        this.gameAction = properties.gameAction;
        this.optional = properties.optional;

        if(!Array.isArray(properties.cardType)) {
            this.cardType = [properties.cardType];
        }
    }

    canTarget(card, context) {
        return (
            this.cardType.includes(card.getType()) &&
            this.cardCondition(card, context) &&
            card.allowGameAction(this.gameAction)
        );
    }

    hasEnoughSelected(selectedCards) {
        return selectedCards.length > 0;
    }

    hasEnoughTargets(context) {
        return (this.optional || context.game.allCards.any(card => this.canTarget(card, context)));
    }

    defaultActivePromptTitle() {
        return 'Choose cards';
    }

    automaticFireOnSelect() {
        return false;
    }

    wouldExceedLimit(selectedCards, card) { // eslint-disable-line no-unused-vars
        return false;
    }

    hasReachedLimit(selectedCards) { // eslint-disable-line no-unused-vars
        return false;
    }

    formatSelectParam(cards) {
        return cards;
    }
}

module.exports = BaseCardSelector;
