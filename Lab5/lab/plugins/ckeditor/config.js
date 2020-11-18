/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    config.toolbarGroups = [
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
		{ name: 'forms', groups: ['forms'] },
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
		{ name: 'links', groups: ['links'] },
		{ name: 'insert', groups: ['insert'] },
		{ name: 'styles', groups: ['styles'] },
		{ name: 'colors', groups: ['colors'] },
		{ name: 'tools', groups: ['tools'] },
		{ name: 'others', groups: ['others'] },
		{ name: 'about', groups: ['about'] }
    ];

    config.removeButtons = 'About,Maximize,Flash,Table,HorizontalRule,SpecialChar,PageBreak,Iframe,Anchor,Language,Blockquote,CreateDiv,RemoveFormat,Subscript,Superscript,Strike,Form,Checkbox,Radio,TextField,Textarea,Button,ImageButton,HiddenField,Scayt,SelectAll,Find,Replace,PasteFromWord,PasteText,Templates,Save,NewPage,Preview,Source,Print,Select,ShowBlocks,Cut,Copy,Paste,Undo,Redo,Styles,Format';

    config.removePlugins = 'resize';

    //config.skin = 'office2013';
    config.skin = 'bootstrapck';
    //config.skin = 'atlas';
};