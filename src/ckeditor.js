/**
* @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*
* Customized by hieu@creadits.com
*/

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
// import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import BalloonToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/balloon/balloontoolbar';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';
import CommentsOnly from '@ckeditor/ckeditor5-comments/src/commentsonly';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';

class ClassicEditor extends ClassicEditorBase {}
// class InlineEditor extends InlineEditorBase {}
// class InlineEditorWithComment extends InlineEditorBase {}
class BalloonEditor extends BalloonEditorBase {}
class BalloonEditorWithComment extends BalloonEditorBase {}

// Plugins to include in the build.
const builtinPlugins = [
	Alignment,
	Autoformat,
	// BlockQuote,
	Bold,
	CKFinder,
	EasyImage,
	Essentials,
	// FontFamily,
	// FontSize,
	Heading,
	// Highlight,
	Image,
	// ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	// RemoveFormat,
	Strikethrough,
	Table,
	TableToolbar,
	Underline,
	UploadAdapter,
	BlockToolbar,
];

ClassicEditor.builtinPlugins = builtinPlugins;

// InlineEditor.builtinPlugins = builtinPlugins;
//
// InlineEditorWithComment.builtinPlugins = [
// 	...builtinPlugins,
// 	BalloonToolbar,
// 	Comments,
// 	CommentsOnly,
// ];

BalloonEditor.builtinPlugins = builtinPlugins;

BalloonEditorWithComment.builtinPlugins = [
	...builtinPlugins,
	BalloonToolbar,
	Comments,
	CommentsOnly,
];

// Editor configuration.
const defaultConfig = {
	toolbar: {
		items: [
			'heading',
			// '|',
			// 'fontsize',
			// 'fontfamily',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			// 'removeFormat',
			// 'highlight',
			'|',
			'alignment',
			'|',
			// 'numberedList',
			// 'bulletedList',
			// '|',
			'link',
			// 'blockquote',
			'insertTable',
			'imageUpload',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
		]
	},
	image: {
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
			// '|',
			// 'imageTextAlternative',
		],
		styles: [
			'alignLeft',
			'full',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	blockToolbar: [ 'heading', '|', 'bulletedList', 'numberedList' ],
	language: 'en'
};

ClassicEditor.defaultConfig = defaultConfig;

// InlineEditor.defaultConfig = defaultConfig;

BalloonEditor.defaultConfig = defaultConfig;

const defaultConfigWithComment = { ...defaultConfig };
const items = [
	...defaultConfigWithComment.toolbar.items,
	'|',
	'comment',
];
defaultConfigWithComment.toolbar = { items };
defaultConfigWithComment.image = {
	toolbar: [
		'imageStyle:alignLeft',
		'imageStyle:full',
		'imageStyle:alignRight',
		'|',
		'imageTextAlternative',
		'|',
		'comment'
	],
	styles: [
		'alignLeft',
		'full',
		'alignRight'
	]
};
defaultConfigWithComment.table = {
	contentToolbar: [
		'tableColumn',
		'tableRow',
		'mergeTableCells'
	],
	tableToolbar: [
		'comment'
	]
};
defaultConfigWithComment.mediaEmbed = {
	toolbar: [
		'comment'
	]
};
defaultConfigWithComment.balloonToolbar = [
	'comment',
];
// InlineEditorWithComment.defaultConfig = defaultConfigWithComment;
BalloonEditorWithComment.defaultConfig = defaultConfigWithComment;

export default {
	ClassicEditor,
	// InlineEditor,
	// InlineEditorWithComment,
	BalloonEditor,
	BalloonEditorWithComment,
};
