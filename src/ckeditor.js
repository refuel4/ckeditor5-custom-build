/**
* @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*
* See more: https://github.com/ckeditor/ckeditor5-build-balloon-block/blob/master/src/ckeditor.js
* Customized by hieu@creadits.com
*/

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
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
class BalloonEditor extends BalloonEditorBase {}
class BalloonEditorWithComment extends BalloonEditorBase {}

// Plugins to include in the build.
const builtinPlugins = [
	Alignment,
	Autoformat,
	Bold,
	CKFinder,
	EasyImage,
	Essentials,
	Heading,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Strikethrough,
	Table,
	TableToolbar,
	Underline,
	UploadAdapter,
	BlockToolbar,
];

ClassicEditor.builtinPlugins = builtinPlugins;

BalloonEditor.builtinPlugins = builtinPlugins;

BalloonEditorWithComment.builtinPlugins = [
	...builtinPlugins,
	BalloonToolbar,
	Comments,
	CommentsOnly,
];

// Editor configuration.
const defaultConfig = {
	blockToolbar: [
		'link', 'bulletedList', 'numberedList', 'alignment',
		'|',
		'insertTable', 'imageUpload', 'mediaEmbed',
	],
	toolbar: {
		items: [
			'heading',
			'|',
			'bold', 'italic', 'underline', 'strikethrough',
		]
	},
	image: {
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
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
	link: {
		addTargetToExternalLinks: true
	},
	language: 'en'
};

ClassicEditor.defaultConfig = defaultConfig;

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
	BalloonEditor,
	BalloonEditorWithComment,
};
