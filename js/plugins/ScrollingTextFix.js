//================================
 /*:
 * @plugindesc v1.00 | In MV 1.3.1, Scrolling text seems to be broken
 * Install this plugin above any message control plugins.
//================================
 * @help
 * This plugin is very simple to use - simply drag and drop into
 * your plugins folder, and enable the plugin in the plugin
 * manager. Make sure this plugin is installed above any message
 * control plugins.
 */
//================================
// rpg_windows.js
Window_ScrollText.prototype.updateMessage = function() {
    this.origin.y += this.scrollSpeed();
    this._windowContentsSprite.worldTransform.ty = 0;
    if (this.origin.y >= this.contents.height) {
        this.terminateMessage();
    }
};