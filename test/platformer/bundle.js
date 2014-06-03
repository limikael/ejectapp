;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @license
 * Pixi.JS - v1.3.0
 * Copyright (c) 2012, Mat Groves
 * http://goodboydigital.com/
 *
 * Compiled: 2013-10-17
 *
 * Pixi.JS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
!function(){function c(){return f.Matrix="undefined"!=typeof Float32Array?Float32Array:Array,f.Matrix}function d(a){return[(255&a>>16)/255,(255&a>>8)/255,(255&a)/255]}function d(a){return[(255&a>>16)/255,(255&a>>8)/255,(255&a)/255]}var e=this,f=f||{};f.Point=function(a,b){this.x=a||0,this.y=b||0},f.Point.prototype.clone=function(){return new f.Point(this.x,this.y)},f.Point.prototype.constructor=f.Point,f.Rectangle=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},f.Rectangle.prototype.clone=function(){return new f.Rectangle(this.x,this.y,this.width,this.height)},f.Rectangle.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=this.x;if(a>=c&&a<=c+this.width){var d=this.y;if(b>=d&&b<=d+this.height)return!0}return!1},f.Rectangle.prototype.constructor=f.Rectangle,f.Polygon=function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var b=[],c=0,d=a.length;d>c;c+=2)b.push(new f.Point(a[c],a[c+1]));a=b}this.points=a},f.Polygon.prototype.clone=function(){for(var a=[],b=0;b<this.points.length;b++)a.push(this.points[b].clone());return new f.Polygon(a)},f.Polygon.prototype.contains=function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c},f.Polygon.prototype.constructor=f.Polygon,f.Circle=function(a,b,c){this.x=a||0,this.y=b||0,this.radius=c||0},f.Circle.prototype.clone=function(){return new f.Circle(this.x,this.y,this.radius)},f.Circle.prototype.contains=function(a,b){if(this.radius<=0)return!1;var c=this.x-a,d=this.y-b,e=this.radius*this.radius;return c*=c,d*=d,e>=c+d},f.Circle.prototype.constructor=f.Circle,f.Ellipse=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},f.Ellipse.prototype.clone=function(){return new f.Ellipse(this.x,this.y,this.width,this.height)},f.Ellipse.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=(a-this.x)/this.width-.5,d=(b-this.y)/this.height-.5;return c*=c,d*=d,.25>c+d},f.Ellipse.getBounds=function(){return new f.Rectangle(this.x,this.y,this.width,this.height)},f.Ellipse.prototype.constructor=f.Ellipse,c(),f.mat3={},f.mat3.create=function(){var a=new f.Matrix(9);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},f.mat3.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},f.mat4={},f.mat4.create=function(){var a=new f.Matrix(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.mat3.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=b[0],n=b[1],o=b[2],p=b[3],q=b[4],r=b[5],s=b[6],t=b[7],u=b[8];return c[0]=m*d+n*g+o*j,c[1]=m*e+n*h+o*k,c[2]=m*f+n*i+o*l,c[3]=p*d+q*g+r*j,c[4]=p*e+q*h+r*k,c[5]=p*f+q*i+r*l,c[6]=s*d+t*g+u*j,c[7]=s*e+t*h+u*k,c[8]=s*f+t*i+u*l,c},f.mat3.clone=function(a){var b=new f.Matrix(9);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b},f.mat3.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[5];return a[1]=a[3],a[2]=a[6],a[3]=c,a[5]=a[7],a[6]=d,a[7]=e,a}return b[0]=a[0],b[1]=a[3],b[2]=a[6],b[3]=a[1],b[4]=a[4],b[5]=a[7],b[6]=a[2],b[7]=a[5],b[8]=a[8],b},f.mat3.toMat4=function(a,b){return b||(b=f.mat4.create()),b[15]=1,b[14]=0,b[13]=0,b[12]=0,b[11]=0,b[10]=a[8],b[9]=a[7],b[8]=a[6],b[7]=0,b[6]=a[5],b[5]=a[4],b[4]=a[3],b[3]=0,b[2]=a[2],b[1]=a[1],b[0]=a[0],b},f.mat4.create=function(){var a=new f.Matrix(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},f.mat4.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[3],f=a[6],g=a[7],h=a[11];return a[1]=a[4],a[2]=a[8],a[3]=a[12],a[4]=c,a[6]=a[9],a[7]=a[13],a[8]=d,a[9]=f,a[11]=a[14],a[12]=e,a[13]=g,a[14]=h,a}return b[0]=a[0],b[1]=a[4],b[2]=a[8],b[3]=a[12],b[4]=a[1],b[5]=a[5],b[6]=a[9],b[7]=a[13],b[8]=a[2],b[9]=a[6],b[10]=a[10],b[11]=a[14],b[12]=a[3],b[13]=a[7],b[14]=a[11],b[15]=a[15],b},f.mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15],t=b[0],u=b[1],v=b[2],w=b[3];return c[0]=t*d+u*h+v*l+w*p,c[1]=t*e+u*i+v*m+w*q,c[2]=t*f+u*j+v*n+w*r,c[3]=t*g+u*k+v*o+w*s,t=b[4],u=b[5],v=b[6],w=b[7],c[4]=t*d+u*h+v*l+w*p,c[5]=t*e+u*i+v*m+w*q,c[6]=t*f+u*j+v*n+w*r,c[7]=t*g+u*k+v*o+w*s,t=b[8],u=b[9],v=b[10],w=b[11],c[8]=t*d+u*h+v*l+w*p,c[9]=t*e+u*i+v*m+w*q,c[10]=t*f+u*j+v*n+w*r,c[11]=t*g+u*k+v*o+w*s,t=b[12],u=b[13],v=b[14],w=b[15],c[12]=t*d+u*h+v*l+w*p,c[13]=t*e+u*i+v*m+w*q,c[14]=t*f+u*j+v*n+w*r,c[15]=t*g+u*k+v*o+w*s,c},f.DisplayObject=function(){this.last=this,this.first=this,this.position=new f.Point,this.scale=new f.Point(1,1),this.pivot=new f.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.worldTransform=f.mat3.create(),this.localTransform=f.mat3.create(),this.color=[],this.dynamic=!0,this._sr=0,this._cr=1},f.DisplayObject.prototype.constructor=f.DisplayObject,f.DisplayObject.prototype.setInteractive=function(a){this.interactive=a},Object.defineProperty(f.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(a){this._interactive=a,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(f.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(a){this._mask=a,a?this.addFilter(a):this.removeFilter()}}),f.DisplayObject.prototype.addFilter=function(a){if(!this.filter){this.filter=!0;var b=new f.FilterBlock,c=new f.FilterBlock;b.mask=a,c.mask=a,b.first=b.last=this,c.first=c.last=this,b.open=!0;var d,e,g=b,h=b;e=this.first._iPrev,e?(d=e._iNext,g._iPrev=e,e._iNext=g):d=this,d&&(d._iPrev=h,h._iNext=d);var g=c,h=c,d=null,e=null;e=this.last,d=e._iNext,d&&(d._iPrev=h,h._iNext=d),g._iPrev=e,e._iNext=g;for(var i=this,j=this.last;i;)i.last==j&&(i.last=c),i=i.parent;this.first=b,this.__renderGroup&&this.__renderGroup.addFilterBlocks(b,c),a.renderable=!1}},f.DisplayObject.prototype.removeFilter=function(){if(this.filter){this.filter=!1;var a=this.first,b=a._iNext,c=a._iPrev;b&&(b._iPrev=c),c&&(c._iNext=b),this.first=a._iNext;var d=this.last,b=d._iNext,c=d._iPrev;b&&(b._iPrev=c),c._iNext=b;for(var e=d._iPrev,f=this;f.last==d&&(f.last=e,f=f.parent););var g=a.mask;g.renderable=!0,this.__renderGroup&&this.__renderGroup.removeFilterBlocks(a,d)}},f.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var a=this.localTransform,b=this.parent.worldTransform,c=this.worldTransform;a[0]=this._cr*this.scale.x,a[1]=-this._sr*this.scale.y,a[3]=this._sr*this.scale.x,a[4]=this._cr*this.scale.y;var d=this.pivot.x,e=this.pivot.y,g=a[0],h=a[1],i=this.position.x-a[0]*d-e*a[1],j=a[3],k=a[4],l=this.position.y-a[4]*e-d*a[3],m=b[0],n=b[1],o=b[2],p=b[3],q=b[4],r=b[5];a[2]=i,a[5]=l,c[0]=m*g+n*j,c[1]=m*h+n*k,c[2]=m*i+n*l+o,c[3]=p*g+q*j,c[4]=p*h+q*k,c[5]=p*i+q*l+r,this.worldAlpha=this.alpha*this.parent.worldAlpha,this.vcount=f.visibleCount},f.visibleCount=0,f.DisplayObjectContainer=function(){f.DisplayObject.call(this),this.children=[]},f.DisplayObjectContainer.prototype=Object.create(f.DisplayObject.prototype),f.DisplayObjectContainer.prototype.constructor=f.DisplayObjectContainer,f.DisplayObjectContainer.prototype.addChild=function(a){if(void 0!=a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),this.stage){var b=a;do b.interactive&&(this.stage.dirty=!0),b.stage=this.stage,b=b._iNext;while(b)}var c,d,e=a.first,f=a.last;d=this.filter?this.last._iPrev:this.last,c=d._iNext;for(var g=this,h=d;g;)g.last==h&&(g.last=a.last),g=g.parent;c&&(c._iPrev=f,f._iNext=c),e._iPrev=d,d._iNext=e,this.__renderGroup&&(a.__renderGroup&&a.__renderGroup.removeDisplayObjectAndChildren(a),this.__renderGroup.addDisplayObjectAndChildren(a))},f.DisplayObjectContainer.prototype.addChildAt=function(a,b){if(!(b>=0&&b<=this.children.length))throw new Error(a+" The index "+b+" supplied is out of bounds "+this.children.length);if(void 0!=a.parent&&a.parent.removeChild(a),a.parent=this,this.stage){var c=a;do c.interactive&&(this.stage.dirty=!0),c.stage=this.stage,c=c._iNext;while(c)}var d,e,f=a.first,g=a.last;if(b==this.children.length){e=this.last;for(var h=this,i=this.last;h;)h.last==i&&(h.last=a.last),h=h.parent}else e=0==b?this:this.children[b-1].last;d=e._iNext,d&&(d._iPrev=g,g._iNext=d),f._iPrev=e,e._iNext=f,this.children.splice(b,0,a),this.__renderGroup&&(a.__renderGroup&&a.__renderGroup.removeDisplayObjectAndChildren(a),this.__renderGroup.addDisplayObjectAndChildren(a))},f.DisplayObjectContainer.prototype.swapChildren=function(){},f.DisplayObjectContainer.prototype.getChildAt=function(a){if(a>=0&&a<this.children.length)return this.children[a];throw new Error(child+" Both the supplied DisplayObjects must be a child of the caller "+this)},f.DisplayObjectContainer.prototype.removeChild=function(a){var b=this.children.indexOf(a);if(-1===b)throw new Error(a+" The supplied DisplayObject must be a child of the caller "+this);var c=a.first,d=a.last,e=d._iNext,f=c._iPrev;if(e&&(e._iPrev=f),f._iNext=e,this.last==d)for(var g=c._iPrev,h=this;h.last==d.last&&(h.last=g,h=h.parent););if(d._iNext=null,c._iPrev=null,this.stage){var i=a;do i.interactive&&(this.stage.dirty=!0),i.stage=null,i=i._iNext;while(i)}a.__renderGroup&&a.__renderGroup.removeDisplayObjectAndChildren(a),a.parent=void 0,this.children.splice(b,1)},f.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible){f.DisplayObject.prototype.updateTransform.call(this);for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform()}},f.blendModes={},f.blendModes.NORMAL=0,f.blendModes.SCREEN=1,f.Sprite=function(a){f.DisplayObjectContainer.call(this),this.anchor=new f.Point,this.texture=a,this.blendMode=f.blendModes.NORMAL,this._width=0,this._height=0,a.baseTexture.hasLoaded?this.updateFrame=!0:(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},f.Sprite.prototype=Object.create(f.DisplayObjectContainer.prototype),f.Sprite.prototype.constructor=f.Sprite,Object.defineProperty(f.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(f.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),f.Sprite.prototype.setTexture=function(a){this.texture.baseTexture!=a.baseTexture?(this.textureChange=!0,this.texture=a,this.__renderGroup&&this.__renderGroup.updateTexture(this)):this.texture=a,this.updateFrame=!0},f.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height),this.updateFrame=!0},f.Sprite.fromFrame=function(a){var b=f.TextureCache[a];if(!b)throw new Error("The frameId '"+a+"' does not exist in the texture cache"+this);return new f.Sprite(b)},f.Sprite.fromImage=function(a){var b=f.Texture.fromImage(a);return new f.Sprite(b)},f.MovieClip=function(a){f.Sprite.call(this,a[0]),this.textures=a,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this.currentFrame=0,this.playing=!1},f.MovieClip.prototype=Object.create(f.Sprite.prototype),f.MovieClip.prototype.constructor=f.MovieClip,f.MovieClip.prototype.stop=function(){this.playing=!1},f.MovieClip.prototype.play=function(){this.playing=!0},f.MovieClip.prototype.gotoAndStop=function(a){this.playing=!1,this.currentFrame=a;var b=0|this.currentFrame+.5;this.setTexture(this.textures[b%this.textures.length])},f.MovieClip.prototype.gotoAndPlay=function(a){this.currentFrame=a,this.playing=!0},f.MovieClip.prototype.updateTransform=function(){if(f.Sprite.prototype.updateTransform.call(this),this.playing){this.currentFrame+=this.animationSpeed;var a=0|this.currentFrame+.5;this.loop||a<this.textures.length?this.setTexture(this.textures[a%this.textures.length]):a>=this.textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())}},f.FilterBlock=function(a){this.graphics=a,this.visible=!0,this.renderable=!0},f.Text=function(a,b){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),f.Sprite.call(this,f.Texture.fromCanvas(this.canvas)),this.setText(a),this.setStyle(b),this.updateText(),this.dirty=!1},f.Text.prototype=Object.create(f.Sprite.prototype),f.Text.prototype.constructor=f.Text,f.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,this.style=a,this.dirty=!0},f.Sprite.prototype.setText=function(a){this.text=a.toString()||" ",this.dirty=!0},f.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.wordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,e=0;e<b.length;e++){var g=this.context.measureText(b[e]).width;c[e]=g,d=Math.max(d,g)}this.canvas.width=d+this.style.strokeThickness;var h=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness;for(this.canvas.height=h*b.length,this.context.fillStyle=this.style.fill,this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="top",e=0;e<b.length;e++){var i=new f.Point(this.style.strokeThickness/2,this.style.strokeThickness/2+e*h);"right"==this.style.align?i.x+=d-c[e]:"center"==this.style.align&&(i.x+=(d-c[e])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[e],i.x,i.y),this.style.fill&&this.context.fillText(b[e],i.x,i.y)}this.updateTexture()},f.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.frame.width=this.canvas.width,this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height,f.texturesToUpdate.push(this.texture.baseTexture)},f.Text.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),f.Sprite.prototype.updateTransform.call(this)},f.Text.prototype.determineFontHeight=function(a){var b=f.Text.heightCache[a];if(!b){var c=document.getElementsByTagName("body")[0],d=document.createElement("div"),e=document.createTextNode("M");d.appendChild(e),d.setAttribute("style",a+";position:absolute;top:0;left:0"),c.appendChild(d),b=d.offsetHeight,f.Text.heightCache[a]=b,c.removeChild(d)}return b},f.Text.prototype.wordWrap=function(a){for(var b=function(a,b,c,d,e){var f=Math.floor((d-c)/2)+c;return f==c?1:a.measureText(b.substring(0,f)).width<=e?a.measureText(b.substring(0,f+1)).width>e?f:arguments.callee(a,b,f,d,e):arguments.callee(a,b,c,f,e)},c=function(a,c,d){if(a.measureText(c).width<=d||c.length<1)return c;var e=b(a,c,0,c.length,d);return c.substring(0,e)+"\n"+arguments.callee(a,c.substring(e),d)},d="",e=a.split("\n"),f=0;f<e.length;f++)d+=c(this.context,e[f],this.style.wordWrapWidth)+"\n";return d},f.Text.prototype.destroy=function(a){a&&this.texture.destroy()},f.Text.heightCache={},f.BitmapText=function(a,b){f.DisplayObjectContainer.call(this),this.setText(a),this.setStyle(b),this.updateText(),this.dirty=!1},f.BitmapText.prototype=Object.create(f.DisplayObjectContainer.prototype),f.BitmapText.prototype.constructor=f.BitmapText,f.BitmapText.prototype.setText=function(a){this.text=a||" ",this.dirty=!0},f.BitmapText.prototype.setStyle=function(a){a=a||{},a.align=a.align||"left",this.style=a;var b=a.font.split(" ");this.fontName=b[b.length-1],this.fontSize=b.length>=2?parseInt(b[b.length-2],10):f.BitmapText.fonts[this.fontName].size,this.dirty=!0},f.BitmapText.prototype.updateText=function(){for(var a=f.BitmapText.fonts[this.fontName],b=new f.Point,c=null,d=[],e=0,g=[],h=0,i=this.fontSize/a.size,j=0;j<this.text.length;j++){var k=this.text.charCodeAt(j);if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))g.push(b.x),e=Math.max(e,b.x),h++,b.x=0,b.y+=a.lineHeight,c=null;else{var l=a.chars[k];l&&(c&&l[c]&&(b.x+=l.kerning[c]),d.push({texture:l.texture,line:h,charCode:k,position:new f.Point(b.x+l.xOffset,b.y+l.yOffset)}),b.x+=l.xAdvance,c=k)}}g.push(b.x),e=Math.max(e,b.x);var m=[];for(j=0;h>=j;j++){var n=0;"right"==this.style.align?n=e-g[j]:"center"==this.style.align&&(n=(e-g[j])/2),m.push(n)}for(j=0;j<d.length;j++){var o=new f.Sprite(d[j].texture);o.position.x=(d[j].position.x+m[d[j].line])*i,o.position.y=d[j].position.y*i,o.scale.x=o.scale.y=i,this.addChild(o)}this.width=b.x*i,this.height=(b.y+a.lineHeight)*i},f.BitmapText.prototype.updateTransform=function(){if(this.dirty){for(;this.children.length>0;)this.removeChild(this.getChildAt(0));this.updateText(),this.dirty=!1}f.DisplayObjectContainer.prototype.updateTransform.call(this)},f.BitmapText.fonts={},f.InteractionManager=function(a){this.stage=a,this.mouse=new f.InteractionData,this.touchs={},this.tempPoint=new f.Point,this.mouseoverEnabled=!0,this.pool=[],this.interactiveItems=[],this.last=0},f.InteractionManager.prototype.constructor=f.InteractionManager,f.InteractionManager.prototype.collectInteractiveSprite=function(a,b){for(var c=a.children,d=c.length,e=d-1;e>=0;e--){var f=c[e];f.interactive?(b.interactiveChildren=!0,this.interactiveItems.push(f),f.children.length>0&&this.collectInteractiveSprite(f,f)):(f.__iParent=null,f.children.length>0&&this.collectInteractiveSprite(f,b))}},f.InteractionManager.prototype.setTarget=function(a){window.navigator.msPointerEnabled&&(a.view.style["-ms-content-zooming"]="none",a.view.style["-ms-touch-action"]="none"),this.target=a,a.view.addEventListener("mousemove",this.onMouseMove.bind(this),!0),a.view.addEventListener("mousedown",this.onMouseDown.bind(this),!0),document.body.addEventListener("mouseup",this.onMouseUp.bind(this),!0),a.view.addEventListener("mouseout",this.onMouseOut.bind(this),!0),a.view.addEventListener("touchstart",this.onTouchStart.bind(this),!0),a.view.addEventListener("touchend",this.onTouchEnd.bind(this),!0),a.view.addEventListener("touchmove",this.onTouchMove.bind(this),!0)},f.InteractionManager.prototype.update=function(){if(this.target){var a=Date.now(),b=a-this.last;if(b=30*b/1e3,!(1>b)){if(this.last=a,this.dirty){this.dirty=!1;for(var c=this.interactiveItems.length,d=0;c>d;d++)this.interactiveItems[d].interactiveChildren=!1;this.interactiveItems=[],this.stage.interactive&&this.interactiveItems.push(this.stage),this.collectInteractiveSprite(this.stage,this.stage)}var e=this.interactiveItems.length;this.target.view.style.cursor="default";for(var d=0;e>d;d++){var f=this.interactiveItems[d];(f.mouseover||f.mouseout||f.buttonMode)&&(f.__hit=this.hitTest(f,this.mouse),this.mouse.target=f,f.__hit?(f.buttonMode&&(this.target.view.style.cursor="pointer"),f.__isOver||(f.mouseover&&f.mouseover(this.mouse),f.__isOver=!0)):f.__isOver&&(f.mouseout&&f.mouseout(this.mouse),f.__isOver=!1))}}}},f.InteractionManager.prototype.onMouseMove=function(a){this.mouse.originalEvent=a||window.event;var b=this.target.view.getBoundingClientRect();this.mouse.global.x=(a.clientX-b.left)*(this.target.width/b.width),this.mouse.global.y=(a.clientY-b.top)*(this.target.height/b.height);var c=this.interactiveItems.length;this.mouse.global;for(var d=0;c>d;d++){var e=this.interactiveItems[d];e.mousemove&&e.mousemove(this.mouse)}},f.InteractionManager.prototype.onMouseDown=function(a){this.mouse.originalEvent=a||window.event;var b=this.interactiveItems.length;this.mouse.global,this.stage;for(var c=0;b>c;c++){var d=this.interactiveItems[c];if((d.mousedown||d.click)&&(d.__mouseIsDown=!0,d.__hit=this.hitTest(d,this.mouse),d.__hit&&(d.mousedown&&d.mousedown(this.mouse),d.__isDown=!0,!d.interactiveChildren)))break}},f.InteractionManager.prototype.onMouseOut=function(){var a=this.interactiveItems.length;this.target.view.style.cursor="default";for(var b=0;a>b;b++){var c=this.interactiveItems[b];c.__isOver&&(this.mouse.target=c,c.mouseout&&c.mouseout(this.mouse),c.__isOver=!1)}},f.InteractionManager.prototype.onMouseUp=function(a){this.mouse.originalEvent=a||window.event,this.mouse.global;for(var b=this.interactiveItems.length,c=!1,d=0;b>d;d++){var e=this.interactiveItems[d];(e.mouseup||e.mouseupoutside||e.click)&&(e.__hit=this.hitTest(e,this.mouse),e.__hit&&!c?(e.mouseup&&e.mouseup(this.mouse),e.__isDown&&e.click&&e.click(this.mouse),e.interactiveChildren||(c=!0)):e.__isDown&&e.mouseupoutside&&e.mouseupoutside(this.mouse),e.__isDown=!1)}},f.InteractionManager.prototype.hitTest=function(a,b){var c=b.global;if(a.vcount!==f.visibleCount)return!1;var d=a instanceof f.Sprite,e=a.worldTransform,g=e[0],h=e[1],i=e[2],j=e[3],k=e[4],l=e[5],m=1/(g*k+h*-j),n=k*m*c.x+-h*m*c.y+(l*h-i*k)*m,o=g*m*c.y+-j*m*c.x+(-l*g+i*j)*m;if(b.target=a,a.hitArea&&a.hitArea.contains)return a.hitArea.contains(n,o)?(b.target=a,!0):!1;if(d){var p,q=a.texture.frame.width,r=a.texture.frame.height,s=-q*a.anchor.x;if(n>s&&s+q>n&&(p=-r*a.anchor.y,o>p&&p+r>o))return b.target=a,!0}for(var t=a.children.length,u=0;t>u;u++){var v=a.children[u],w=this.hitTest(v,b);if(w)return b.target=a,!0}return!1},f.InteractionManager.prototype.onTouchMove=function(a){for(var b=this.target.view.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var e=c[d],f=this.touchs[e.identifier];f.originalEvent=a||window.event,f.global.x=(e.clientX-b.left)*(this.target.width/b.width),f.global.y=(e.clientY-b.top)*(this.target.height/b.height)}for(var g=this.interactiveItems.length,d=0;g>d;d++){var h=this.interactiveItems[d];h.touchmove&&h.touchmove(f)}},f.InteractionManager.prototype.onTouchStart=function(a){for(var b=this.target.view.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var e=c[d],g=this.pool.pop();g||(g=new f.InteractionData),g.originalEvent=a||window.event,this.touchs[e.identifier]=g,g.global.x=(e.clientX-b.left)*(this.target.width/b.width),g.global.y=(e.clientY-b.top)*(this.target.height/b.height);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i];if((j.touchstart||j.tap)&&(j.__hit=this.hitTest(j,g),j.__hit&&(j.touchstart&&j.touchstart(g),j.__isDown=!0,j.__touchData=g,!j.interactiveChildren)))break}}},f.InteractionManager.prototype.onTouchEnd=function(a){for(var b=this.target.view.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var e=c[d],f=this.touchs[e.identifier],g=!1;f.global.x=(e.clientX-b.left)*(this.target.width/b.width),f.global.y=(e.clientY-b.top)*(this.target.height/b.height);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i],k=j.__touchData;j.__hit=this.hitTest(j,f),k==f&&(f.originalEvent=a||window.event,(j.touchend||j.tap)&&(j.__hit&&!g?(j.touchend&&j.touchend(f),j.__isDown&&j.tap&&j.tap(f),j.interactiveChildren||(g=!0)):j.__isDown&&j.touchendoutside&&j.touchendoutside(f),j.__isDown=!1),j.__touchData=null)}this.pool.push(f),this.touchs[e.identifier]=null}},f.InteractionData=function(){this.global=new f.Point,this.local=new f.Point,this.target,this.originalEvent},f.InteractionData.prototype.getLocalPosition=function(a){var b=a.worldTransform,c=this.global,d=b[0],e=b[1],g=b[2],h=b[3],i=b[4],j=b[5],k=1/(d*i+e*-h);return new f.Point(i*k*c.x+-e*k*c.y+(j*e-g*i)*k,d*k*c.y+-h*k*c.x+(-j*d+g*h)*k)},f.InteractionData.prototype.constructor=f.InteractionData,f.Stage=function(a,b){f.DisplayObjectContainer.call(this),this.worldTransform=f.mat3.create(),this.interactive=b,this.interactionManager=new f.InteractionManager(this),this.dirty=!0,this.__childrenAdded=[],this.__childrenRemoved=[],this.stage=this,this.stage.hitArea=new f.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(a),this.worldVisible=!0},f.Stage.prototype=Object.create(f.DisplayObjectContainer.prototype),f.Stage.prototype.constructor=f.Stage,f.Stage.prototype.updateTransform=function(){this.worldAlpha=1,this.vcount=f.visibleCount;for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},f.Stage.prototype.setBackgroundColor=function(a){this.backgroundColor=a||0,this.backgroundColorSplit=d(this.backgroundColor);var b=this.backgroundColor.toString(16);b="000000".substr(0,6-b.length)+b,this.backgroundColorString="#"+b},f.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var h=0,i=["ms","moz","webkit","o"],j=0;j<i.length&&!window.requestAnimationFrame;++j)window.requestAnimationFrame=window[i[j]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[j]+"CancelAnimationFrame"]||window[i[j]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-h)),d=window.setTimeout(function(){a(b+c)},c);return h=b+c,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.requestAnimFrame=window.requestAnimationFrame,"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}());var k=f.AjaxRequest=function(){var a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new XMLHttpRequest:!1;for(var b=0;b<a.length;b++)try{return new ActiveXObject(a[b])}catch(c){}};f.runList=function(a){console.log(">>>>>>>>>"),console.log("_");var b=0,c=a.first;for(console.log(c);c._iNext;)if(b++,c=c._iNext,console.log(c),b>100){console.log("BREAK");break}},f.EventTarget=function(){var a={};this.addEventListener=this.on=function(b,c){void 0===a[b]&&(a[b]=[]),-1===a[b].indexOf(c)&&a[b].push(c)},this.dispatchEvent=this.emit=function(b){for(var c in a[b.type])a[b.type][c](b)},this.removeEventListener=this.off=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)}},f.autoDetectRenderer=function(a,b,c,d,e){a||(a=800),b||(b=600);var g=function(){try{return!!window.WebGLRenderingContext&&!!document.createElement("canvas").getContext("experimental-webgl")}catch(a){return!1}}();if(g){var h=-1!=navigator.userAgent.toLowerCase().indexOf("msie");g=!h}return g?new f.WebGLRenderer(a,b,c,d,e):new f.CanvasRenderer(a,b,c,d)},f.PolyK={},f.PolyK.Triangulate=function(a){var b=!0,c=a.length>>1;if(3>c)return[];for(var d=[],e=[],g=0;c>g;g++)e.push(g);for(var g=0,h=c;h>3;){var i=e[(g+0)%h],j=e[(g+1)%h],k=e[(g+2)%h],l=a[2*i],m=a[2*i+1],n=a[2*j],o=a[2*j+1],p=a[2*k],q=a[2*k+1],r=!1;if(f.PolyK._convex(l,m,n,o,p,q,b)){r=!0;for(var s=0;h>s;s++){var t=e[s];if(t!=i&&t!=j&&t!=k&&f.PolyK._PointInTriangle(a[2*t],a[2*t+1],l,m,n,o,p,q)){r=!1;break}}}if(r)d.push(i,j,k),e.splice((g+1)%h,1),h--,g=0;else if(g++>3*h){if(!b)return console.log("PIXI Warning: shape too complex to fill"),[];var d=[];e=[];for(var g=0;c>g;g++)e.push(g);g=0,h=c,b=!1}}return d.push(e[0],e[1],e[2]),d},f.PolyK._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},f.PolyK._convex=function(a,b,c,d,e,f,g){return(b-d)*(e-c)+(c-a)*(f-d)>=0==g},f.shaderFragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","gl_FragColor = gl_FragColor * vColor;","}"],f.shaderVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","varying vec2 vTextureCoord;","varying float vColor;","void main(void) {","gl_Position = vec4( aVertexPosition.x / projectionVector.x -1.0, aVertexPosition.y / -projectionVector.y + 1.0 , 0.0, 1.0);","vTextureCoord = aTextureCoord;","vColor = aColor;","}"],f.stripShaderFragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying float vColor;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","gl_FragColor = gl_FragColor * alpha;","}"],f.stripShaderVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","varying vec2 vTextureCoord;","varying float vColor;","void main(void) {","vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);","gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","vTextureCoord = aTextureCoord;","vColor = aColor;","}"],f.primitiveShaderFragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","gl_FragColor = vColor;","}"],f.primitiveShaderVertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform float alpha;","varying vec4 vColor;","void main(void) {","vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);","gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","vColor = aColor  * alpha;","}"],f.initPrimitiveShader=function(){var a=f.gl,b=f.compileProgram(f.primitiveShaderVertexSrc,f.primitiveShaderFragmentSrc);a.useProgram(b),b.vertexPositionAttribute=a.getAttribLocation(b,"aVertexPosition"),b.colorAttribute=a.getAttribLocation(b,"aColor"),b.projectionVector=a.getUniformLocation(b,"projectionVector"),b.translationMatrix=a.getUniformLocation(b,"translationMatrix"),b.alpha=a.getUniformLocation(b,"alpha"),f.primitiveProgram=b},f.initDefaultShader=function(){var a=this.gl,b=f.compileProgram(f.shaderVertexSrc,f.shaderFragmentSrc);a.useProgram(b),b.vertexPositionAttribute=a.getAttribLocation(b,"aVertexPosition"),b.projectionVector=a.getUniformLocation(b,"projectionVector"),b.textureCoordAttribute=a.getAttribLocation(b,"aTextureCoord"),b.colorAttribute=a.getAttribLocation(b,"aColor"),b.samplerUniform=a.getUniformLocation(b,"uSampler"),f.shaderProgram=b},f.initDefaultStripShader=function(){var a=this.gl,b=f.compileProgram(f.stripShaderVertexSrc,f.stripShaderFragmentSrc);a.useProgram(b),b.vertexPositionAttribute=a.getAttribLocation(b,"aVertexPosition"),b.projectionVector=a.getUniformLocation(b,"projectionVector"),b.textureCoordAttribute=a.getAttribLocation(b,"aTextureCoord"),b.translationMatrix=a.getUniformLocation(b,"translationMatrix"),b.alpha=a.getUniformLocation(b,"alpha"),b.colorAttribute=a.getAttribLocation(b,"aColor"),b.projectionVector=a.getUniformLocation(b,"projectionVector"),b.samplerUniform=a.getUniformLocation(b,"uSampler"),f.stripShaderProgram=b},f.CompileVertexShader=function(a,b){return f._CompileShader(a,b,a.VERTEX_SHADER)},f.CompileFragmentShader=function(a,b){return f._CompileShader(a,b,a.FRAGMENT_SHADER)},f._CompileShader=function(a,b,c){var d=b.join("\n"),e=a.createShader(c);return a.shaderSource(e,d),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?e:(alert(a.getShaderInfoLog(e)),null)},f.compileProgram=function(a,b){var c=f.gl,d=f.CompileFragmentShader(c,b),e=f.CompileVertexShader(c,a),g=c.createProgram();return c.attachShader(g,e),c.attachShader(g,d),c.linkProgram(g),c.getProgramParameter(g,c.LINK_STATUS)||alert("Could not initialise shaders"),g},f.activateDefaultShader=function(){var a=f.gl,b=f.shaderProgram;
a.useProgram(b),a.enableVertexAttribArray(b.vertexPositionAttribute),a.enableVertexAttribArray(b.textureCoordAttribute),a.enableVertexAttribArray(b.colorAttribute)},f.activatePrimitiveShader=function(){var a=f.gl;a.disableVertexAttribArray(f.shaderProgram.textureCoordAttribute),a.disableVertexAttribArray(f.shaderProgram.colorAttribute),a.useProgram(f.primitiveProgram),a.enableVertexAttribArray(f.primitiveProgram.vertexPositionAttribute),a.enableVertexAttribArray(f.primitiveProgram.colorAttribute)},f.WebGLGraphics=function(){},f.WebGLGraphics.renderGraphics=function(a,b){var c=f.gl;a._webGL||(a._webGL={points:[],indices:[],lastIndex:0,buffer:c.createBuffer(),indexBuffer:c.createBuffer()}),a.dirty&&(a.dirty=!1,a.clearDirty&&(a.clearDirty=!1,a._webGL.lastIndex=0,a._webGL.points=[],a._webGL.indices=[]),f.WebGLGraphics.updateGraphics(a)),f.activatePrimitiveShader();var d=f.mat3.clone(a.worldTransform);f.mat3.transpose(d),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.uniformMatrix3fv(f.primitiveProgram.translationMatrix,!1,d),c.uniform2f(f.primitiveProgram.projectionVector,b.x,b.y),c.uniform1f(f.primitiveProgram.alpha,a.worldAlpha),c.bindBuffer(c.ARRAY_BUFFER,a._webGL.buffer),c.vertexAttribPointer(f.shaderProgram.vertexPositionAttribute,2,c.FLOAT,!1,0,0),c.vertexAttribPointer(f.primitiveProgram.vertexPositionAttribute,2,c.FLOAT,!1,24,0),c.vertexAttribPointer(f.primitiveProgram.colorAttribute,4,c.FLOAT,!1,24,8),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,a._webGL.indexBuffer),c.drawElements(c.TRIANGLE_STRIP,a._webGL.indices.length,c.UNSIGNED_SHORT,0),f.activateDefaultShader()},f.WebGLGraphics.updateGraphics=function(a){for(var b=a._webGL.lastIndex;b<a.graphicsData.length;b++){var c=a.graphicsData[b];c.type==f.Graphics.POLY?(c.fill&&c.points.length>3&&f.WebGLGraphics.buildPoly(c,a._webGL),c.lineWidth>0&&f.WebGLGraphics.buildLine(c,a._webGL)):c.type==f.Graphics.RECT?f.WebGLGraphics.buildRectangle(c,a._webGL):(c.type==f.Graphics.CIRC||c.type==f.Graphics.ELIP)&&f.WebGLGraphics.buildCircle(c,a._webGL)}a._webGL.lastIndex=a.graphicsData.length;var d=f.gl;a._webGL.glPoints=new Float32Array(a._webGL.points),d.bindBuffer(d.ARRAY_BUFFER,a._webGL.buffer),d.bufferData(d.ARRAY_BUFFER,a._webGL.glPoints,d.STATIC_DRAW),a._webGL.glIndicies=new Uint16Array(a._webGL.indices),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,a._webGL.indexBuffer),d.bufferData(d.ELEMENT_ARRAY_BUFFER,a._webGL.glIndicies,d.STATIC_DRAW)},f.WebGLGraphics.buildRectangle=function(a,b){var c=a.points,e=c[0],g=c[1],h=c[2],i=c[3];if(a.fill){var j=d(a.fillColor),k=a.fillAlpha,l=j[0]*k,m=j[1]*k,n=j[2]*k,o=b.points,p=b.indices,q=o.length/6;o.push(e,g),o.push(l,m,n,k),o.push(e+h,g),o.push(l,m,n,k),o.push(e,g+i),o.push(l,m,n,k),o.push(e+h,g+i),o.push(l,m,n,k),p.push(q,q,q+1,q+2,q+3,q+3)}a.lineWidth&&(a.points=[e,g,e+h,g,e+h,g+i,e,g+i,e,g],f.WebGLGraphics.buildLine(a,b))},f.WebGLGraphics.buildCircle=function(a,b){var c=a.points,e=c[0],g=c[1],h=c[2],i=c[3],j=40,k=2*Math.PI/j;if(a.fill){var l=d(a.fillColor),m=a.fillAlpha,n=l[0]*m,o=l[1]*m,p=l[2]*m,q=b.points,r=b.indices,s=q.length/6;r.push(s);for(var t=0;j+1>t;t++)q.push(e,g,n,o,p,m),q.push(e+Math.sin(k*t)*h,g+Math.cos(k*t)*i,n,o,p,m),r.push(s++,s++);r.push(s-1)}if(a.lineWidth){a.points=[];for(var t=0;j+1>t;t++)a.points.push(e+Math.sin(k*t)*h,g+Math.cos(k*t)*i);f.WebGLGraphics.buildLine(a,b)}},f.WebGLGraphics.buildLine=function(a,b){var c=a.points;if(0!=c.length){var e=new f.Point(c[0],c[1]),g=new f.Point(c[c.length-2],c[c.length-1]);if(e.x==g.x&&e.y==g.y){c.pop(),c.pop(),g=new f.Point(c[c.length-2],c[c.length-1]);var h=g.x+.5*(e.x-g.x),i=g.y+.5*(e.y-g.y);c.unshift(h,i),c.push(h,i)}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E=b.points,F=b.indices,G=c.length/2,H=c.length,I=E.length/6,J=a.lineWidth/2,K=d(a.lineColor),L=a.lineAlpha,M=K[0]*L,N=K[1]*L,O=K[2]*L;j=c[0],k=c[1],l=c[2],m=c[3],p=-(k-m),q=j-l,D=Math.sqrt(p*p+q*q),p/=D,q/=D,p*=J,q*=J,E.push(j-p,k-q,M,N,O,L),E.push(j+p,k+q,M,N,O,L);for(var P=1;G-1>P;P++)j=c[2*(P-1)],k=c[2*(P-1)+1],l=c[2*P],m=c[2*P+1],n=c[2*(P+1)],o=c[2*(P+1)+1],p=-(k-m),q=j-l,D=Math.sqrt(p*p+q*q),p/=D,q/=D,p*=J,q*=J,r=-(m-o),s=l-n,D=Math.sqrt(r*r+s*s),r/=D,s/=D,r*=J,s*=J,v=-q+k-(-q+m),w=-p+l-(-p+j),x=(-p+j)*(-q+m)-(-p+l)*(-q+k),y=-s+o-(-s+m),z=-r+l-(-r+n),A=(-r+n)*(-s+m)-(-r+l)*(-s+o),B=v*z-y*w,0==B&&(B+=1),px=(w*A-z*x)/B,py=(y*x-v*A)/B,C=(px-l)*(px-l)+(py-m)+(py-m),C>19600?(t=p-r,u=q-s,D=Math.sqrt(t*t+u*u),t/=D,u/=D,t*=J,u*=J,E.push(l-t,m-u),E.push(M,N,O,L),E.push(l+t,m+u),E.push(M,N,O,L),E.push(l-t,m-u),E.push(M,N,O,L),H++):(E.push(px,py),E.push(M,N,O,L),E.push(l-(px-l),m-(py-m)),E.push(M,N,O,L));j=c[2*(G-2)],k=c[2*(G-2)+1],l=c[2*(G-1)],m=c[2*(G-1)+1],p=-(k-m),q=j-l,D=Math.sqrt(p*p+q*q),p/=D,q/=D,p*=J,q*=J,E.push(l-p,m-q),E.push(M,N,O,L),E.push(l+p,m+q),E.push(M,N,O,L),F.push(I);for(var P=0;H>P;P++)F.push(I++);F.push(I-1)}},f.WebGLGraphics.buildPoly=function(a,b){var c=a.points;if(!(c.length<6)){for(var e=b.points,g=b.indices,h=c.length/2,i=d(a.fillColor),j=a.fillAlpha,k=i[0]*j,l=i[1]*j,m=i[2]*j,n=f.PolyK.Triangulate(c),o=e.length/6,p=0;p<n.length;p+=3)g.push(n[p]+o),g.push(n[p]+o),g.push(n[p+1]+o),g.push(n[p+2]+o),g.push(n[p+2]+o);for(var p=0;h>p;p++)e.push(c[2*p],c[2*p+1],k,l,m,j)}},f._defaultFrame=new f.Rectangle(0,0,1,1),f.gl,f.WebGLRenderer=function(a,b,c,d,e){this.transparent=!!d,this.width=a||800,this.height=b||600,this.view=c||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height;var g=this;this.view.addEventListener("webglcontextlost",function(a){g.handleContextLost(a)},!1),this.view.addEventListener("webglcontextrestored",function(a){g.handleContextRestored(a)},!1),this.batchs=[];try{f.gl=this.gl=this.view.getContext("experimental-webgl",{alpha:this.transparent,antialias:!!e,premultipliedAlpha:!1,stencil:!0})}catch(h){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}f.initPrimitiveShader(),f.initDefaultShader(),f.initDefaultStripShader(),f.activateDefaultShader();var i=this.gl;f.WebGLRenderer.gl=i,this.batch=new f.WebGLBatch(i),i.disable(i.DEPTH_TEST),i.disable(i.CULL_FACE),i.enable(i.BLEND),i.colorMask(!0,!0,!0,this.transparent),f.projection=new f.Point(400,300),this.resize(this.width,this.height),this.contextLost=!1,this.stageRenderGroup=new f.WebGLRenderGroup(this.gl)},f.WebGLRenderer.prototype.constructor=f.WebGLRenderer,f.WebGLRenderer.getBatch=function(){return 0==f._batchs.length?new f.WebGLBatch(f.WebGLRenderer.gl):f._batchs.pop()},f.WebGLRenderer.returnBatch=function(a){a.clean(),f._batchs.push(a)},f.WebGLRenderer.prototype.render=function(a){if(!this.contextLost){this.__stage!==a&&(this.__stage=a,this.stageRenderGroup.setRenderable(a)),f.WebGLRenderer.updateTextures(),f.visibleCount++,a.updateTransform();var b=this.gl;if(b.colorMask(!0,!0,!0,this.transparent),b.viewport(0,0,this.width,this.height),b.bindFramebuffer(b.FRAMEBUFFER,null),b.clearColor(a.backgroundColorSplit[0],a.backgroundColorSplit[1],a.backgroundColorSplit[2],!this.transparent),b.clear(b.COLOR_BUFFER_BIT),this.stageRenderGroup.backgroundColor=a.backgroundColorSplit,this.stageRenderGroup.render(f.projection),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),f.Texture.frameUpdates.length>0){for(var c=0;c<f.Texture.frameUpdates.length;c++)f.Texture.frameUpdates[c].updateFrame=!1;f.Texture.frameUpdates=[]}}},f.WebGLRenderer.updateTextures=function(){for(var a=0;a<f.texturesToUpdate.length;a++)f.WebGLRenderer.updateTexture(f.texturesToUpdate[a]);for(var a=0;a<f.texturesToDestroy.length;a++)f.WebGLRenderer.destroyTexture(f.texturesToDestroy[a]);f.texturesToUpdate=[],f.texturesToDestroy=[]},f.WebGLRenderer.updateTexture=function(a){var b=f.gl;a._glTexture||(a._glTexture=b.createTexture()),a.hasLoaded&&(b.bindTexture(b.TEXTURE_2D,a._glTexture),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a.source),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),a._powerOf2?(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.REPEAT),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.REPEAT)):(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)),b.bindTexture(b.TEXTURE_2D,null))},f.WebGLRenderer.destroyTexture=function(a){var b=f.gl;a._glTexture&&(a._glTexture=b.createTexture(),b.deleteTexture(b.TEXTURE_2D,a._glTexture))},f.WebGLRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b,this.gl.viewport(0,0,this.width,this.height),f.projection.x=this.width/2,f.projection.y=this.height/2},f.WebGLRenderer.prototype.handleContextLost=function(a){a.preventDefault(),this.contextLost=!0},f.WebGLRenderer.prototype.handleContextRestored=function(){this.gl=this.view.getContext("experimental-webgl",{alpha:!0}),this.initShaders();for(var a in f.TextureCache){var b=f.TextureCache[a].baseTexture;b._glTexture=null,f.WebGLRenderer.updateTexture(b)}for(var c=0;c<this.batchs.length;c++)this.batchs[c].restoreLostContext(this.gl),this.batchs[c].dirty=!0;f._restoreBatchs(this.gl),this.contextLost=!1},f._batchs=[],f._getBatch=function(a){return 0==f._batchs.length?new f.WebGLBatch(a):f._batchs.pop()},f._returnBatch=function(a){a.clean(),f._batchs.push(a)},f._restoreBatchs=function(a){for(var b=0;b<f._batchs.length;b++)f._batchs[b].restoreLostContext(a)},f.WebGLBatch=function(a){this.gl=a,this.size=0,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer(),this.blendMode=f.blendModes.NORMAL,this.dynamicSize=1},f.WebGLBatch.prototype.constructor=f.WebGLBatch,f.WebGLBatch.prototype.clean=function(){this.verticies=[],this.uvs=[],this.indices=[],this.colors=[],this.dynamicSize=1,this.texture=null,this.last=null,this.size=0,this.head,this.tail},f.WebGLBatch.prototype.restoreLostContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer()},f.WebGLBatch.prototype.init=function(a){a.batch=this,this.dirty=!0,this.blendMode=a.blendMode,this.texture=a.texture.baseTexture,this.head=a,this.tail=a,this.size=1,this.growBatch()},f.WebGLBatch.prototype.insertBefore=function(a,b){this.size++,a.batch=this,this.dirty=!0;var c=b.__prev;b.__prev=a,a.__next=b,c?(a.__prev=c,c.__next=a):this.head=a},f.WebGLBatch.prototype.insertAfter=function(a,b){this.size++,a.batch=this,this.dirty=!0;var c=b.__next;b.__next=a,a.__prev=b,c?(a.__next=c,c.__prev=a):this.tail=a},f.WebGLBatch.prototype.remove=function(a){return this.size--,0==this.size?(a.batch=null,a.__prev=null,a.__next=null,void 0):(a.__prev?a.__prev.__next=a.__next:(this.head=a.__next,this.head.__prev=null),a.__next?a.__next.__prev=a.__prev:(this.tail=a.__prev,this.tail.__next=null),a.batch=null,a.__next=null,a.__prev=null,this.dirty=!0,void 0)},f.WebGLBatch.prototype.split=function(a){this.dirty=!0;var b=new f.WebGLBatch(this.gl);b.init(a),b.texture=this.texture,b.tail=this.tail,this.tail=a.__prev,this.tail.__next=null,a.__prev=null;for(var c=0;a;)c++,a.batch=b,a=a.__next;return b.size=c,this.size-=c,b},f.WebGLBatch.prototype.merge=function(a){this.dirty=!0,this.tail.__next=a.head,a.head.__prev=this.tail,this.size+=a.size,this.tail=a.tail;for(var b=a.head;b;)b.batch=this,b=b.__next},f.WebGLBatch.prototype.growBatch=function(){var a=this.gl;this.dynamicSize=1==this.size?1:1.5*this.size,this.verticies=new Float32Array(8*this.dynamicSize),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.verticies,a.DYNAMIC_DRAW),this.uvs=new Float32Array(8*this.dynamicSize),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),a.bufferData(a.ARRAY_BUFFER,this.uvs,a.DYNAMIC_DRAW),this.dirtyUVS=!0,this.colors=new Float32Array(4*this.dynamicSize),a.bindBuffer(a.ARRAY_BUFFER,this.colorBuffer),a.bufferData(a.ARRAY_BUFFER,this.colors,a.DYNAMIC_DRAW),this.dirtyColors=!0,this.indices=new Uint16Array(6*this.dynamicSize);for(var b=this.indices.length/6,c=0;b>c;c++){var d=6*c,e=4*c;this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3}a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW)},f.WebGLBatch.prototype.refresh=function(){this.gl,this.dynamicSize<this.size&&this.growBatch();for(var a,b=0,c=this.head;c;){a=8*b;var d=c.texture,e=d.frame,f=d.baseTexture.width,g=d.baseTexture.height;this.uvs[a+0]=e.x/f,this.uvs[a+1]=e.y/g,this.uvs[a+2]=(e.x+e.width)/f,this.uvs[a+3]=e.y/g,this.uvs[a+4]=(e.x+e.width)/f,this.uvs[a+5]=(e.y+e.height)/g,this.uvs[a+6]=e.x/f,this.uvs[a+7]=(e.y+e.height)/g,c.updateFrame=!1,colorIndex=4*b,this.colors[colorIndex]=this.colors[colorIndex+1]=this.colors[colorIndex+2]=this.colors[colorIndex+3]=c.worldAlpha,c=c.__next,b++}this.dirtyUVS=!0,this.dirtyColors=!0},f.WebGLBatch.prototype.update=function(){this.gl;for(var a,b,c,d,e,g,h,i,j,k,l,m,n,o,p,q,r=0,s=this.head;s;){if(s.vcount===f.visibleCount){if(b=s.texture.frame.width,c=s.texture.frame.height,d=s.anchor.x,e=s.anchor.y,g=b*(1-d),h=b*-d,i=c*(1-e),j=c*-e,k=8*r,a=s.worldTransform,l=a[0],m=a[3],n=a[1],o=a[4],p=a[2],q=a[5],this.verticies[k+0]=l*h+n*j+p,this.verticies[k+1]=o*j+m*h+q,this.verticies[k+2]=l*g+n*j+p,this.verticies[k+3]=o*j+m*g+q,this.verticies[k+4]=l*g+n*i+p,this.verticies[k+5]=o*i+m*g+q,this.verticies[k+6]=l*h+n*i+p,this.verticies[k+7]=o*i+m*h+q,s.updateFrame||s.texture.updateFrame){this.dirtyUVS=!0;var t=s.texture,u=t.frame,v=t.baseTexture.width,w=t.baseTexture.height;this.uvs[k+0]=u.x/v,this.uvs[k+1]=u.y/w,this.uvs[k+2]=(u.x+u.width)/v,this.uvs[k+3]=u.y/w,this.uvs[k+4]=(u.x+u.width)/v,this.uvs[k+5]=(u.y+u.height)/w,this.uvs[k+6]=u.x/v,this.uvs[k+7]=(u.y+u.height)/w,s.updateFrame=!1}if(s.cacheAlpha!=s.worldAlpha){s.cacheAlpha=s.worldAlpha;var x=4*r;this.colors[x]=this.colors[x+1]=this.colors[x+2]=this.colors[x+3]=s.worldAlpha,this.dirtyColors=!0}}else k=8*r,this.verticies[k+0]=0,this.verticies[k+1]=0,this.verticies[k+2]=0,this.verticies[k+3]=0,this.verticies[k+4]=0,this.verticies[k+5]=0,this.verticies[k+6]=0,this.verticies[k+7]=0;r++,s=s.__next}},f.WebGLBatch.prototype.render=function(a,b){if(a=a||0,void 0==b&&(b=this.size),this.dirty&&(this.refresh(),this.dirty=!1),0!=this.size){this.update();var c=this.gl,d=f.shaderProgram;c.useProgram(d),c.bindBuffer(c.ARRAY_BUFFER,this.vertexBuffer),c.bufferSubData(c.ARRAY_BUFFER,0,this.verticies),c.vertexAttribPointer(d.vertexPositionAttribute,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this.uvBuffer),this.dirtyUVS&&(this.dirtyUVS=!1,c.bufferSubData(c.ARRAY_BUFFER,0,this.uvs)),c.vertexAttribPointer(d.textureCoordAttribute,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,this.texture._glTexture),c.bindBuffer(c.ARRAY_BUFFER,this.colorBuffer),this.dirtyColors&&(this.dirtyColors=!1,c.bufferSubData(c.ARRAY_BUFFER,0,this.colors)),c.vertexAttribPointer(d.colorAttribute,1,c.FLOAT,!1,0,0),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=b-a;c.drawElements(c.TRIANGLES,6*e,c.UNSIGNED_SHORT,6*2*a)}},f.WebGLRenderGroup=function(a){this.gl=a,this.root,this.backgroundColor,this.batchs=[],this.toRemove=[]},f.WebGLRenderGroup.prototype.constructor=f.WebGLRenderGroup,f.WebGLRenderGroup.prototype.setRenderable=function(a){this.root&&this.removeDisplayObjectAndChildren(this.root),a.worldVisible=a.visible,this.root=a,this.addDisplayObjectAndChildren(a)},f.WebGLRenderGroup.prototype.render=function(a){f.WebGLRenderer.updateTextures();var b=this.gl;b.uniform2f(f.shaderProgram.projectionVector,a.x,a.y),b.blendFunc(b.ONE,b.ONE_MINUS_SRC_ALPHA);for(var c,d=0;d<this.batchs.length;d++)if(c=this.batchs[d],c instanceof f.WebGLBatch)this.batchs[d].render();else{var e=c.vcount===f.visibleCount;c instanceof f.TilingSprite?e&&this.renderTilingSprite(c,a):c instanceof f.Strip?e&&this.renderStrip(c,a):c instanceof f.Graphics?e&&c.renderable&&f.WebGLGraphics.renderGraphics(c,a):c instanceof f.FilterBlock&&(c.open?(b.enable(b.STENCIL_TEST),b.colorMask(!1,!1,!1,!1),b.stencilFunc(b.ALWAYS,1,255),b.stencilOp(b.KEEP,b.KEEP,b.REPLACE),f.WebGLGraphics.renderGraphics(c.mask,a),b.colorMask(!0,!0,!0,!1),b.stencilFunc(b.NOTEQUAL,0,255),b.stencilOp(b.KEEP,b.KEEP,b.KEEP)):b.disable(b.STENCIL_TEST))}},f.WebGLRenderGroup.prototype.handleFilter=function(){},f.WebGLRenderGroup.prototype.renderSpecific=function(a,b){f.WebGLRenderer.updateTextures();var c=this.gl;c.uniform2f(f.shaderProgram.projectionVector,b.x,b.y);for(var d,e,g,h,i=a.first;i._iNext&&(i=i._iNext,!i.renderable||!i.__renderGroup););var j=i.batch;if(i instanceof f.Sprite){j=i.batch;var k=j.head;if(k==i)d=0;else for(d=1;k.__next!=i;)d++,k=k.__next}else j=i;for(var l,m=a,n=a;n.children.length>0;)n=n.children[n.children.length-1],n.renderable&&(m=n);if(m instanceof f.Sprite){l=m.batch;var k=l.head;if(k==m)g=0;else for(g=1;k.__next!=m;)g++,k=k.__next}else l=m;if(j==l)return j instanceof f.WebGLBatch?j.render(d,g+1):this.renderSpecial(j,b),void 0;e=this.batchs.indexOf(j),h=this.batchs.indexOf(l),j instanceof f.WebGLBatch?j.render(d):this.renderSpecial(j,b);for(var o=e+1;h>o;o++)renderable=this.batchs[o],renderable instanceof f.WebGLBatch?this.batchs[o].render():this.renderSpecial(renderable,b);l instanceof f.WebGLBatch?l.render(0,g+1):this.renderSpecial(l,b)},f.WebGLRenderGroup.prototype.renderSpecial=function(a,b){var c=a.vcount===f.visibleCount;if(a instanceof f.TilingSprite)c&&this.renderTilingSprite(a,b);else if(a instanceof f.Strip)c&&this.renderStrip(a,b);else if(a instanceof f.CustomRenderable)c&&a.renderWebGL(this,b);else if(a instanceof f.Graphics)c&&a.renderable&&f.WebGLGraphics.renderGraphics(a,b);else if(a instanceof f.FilterBlock){var d=f.gl;a.open?(d.enable(d.STENCIL_TEST),d.colorMask(!1,!1,!1,!1),d.stencilFunc(d.ALWAYS,1,255),d.stencilOp(d.KEEP,d.KEEP,d.REPLACE),f.WebGLGraphics.renderGraphics(a.mask,b),d.colorMask(!0,!0,!0,!0),d.stencilFunc(d.NOTEQUAL,0,255),d.stencilOp(d.KEEP,d.KEEP,d.KEEP)):d.disable(d.STENCIL_TEST)}},f.WebGLRenderGroup.prototype.updateTexture=function(a){this.removeObject(a);for(var b=a.first;b!=this.root&&(b=b._iPrev,!b.renderable||!b.__renderGroup););for(var c=a.last;c._iNext&&(c=c._iNext,!c.renderable||!c.__renderGroup););this.insertObject(a,b,c)},f.WebGLRenderGroup.prototype.addFilterBlocks=function(a,b){a.__renderGroup=this,b.__renderGroup=this;for(var c=a;c!=this.root&&(c=c._iPrev,!c.renderable||!c.__renderGroup););this.insertAfter(a,c);for(var d=b;d!=this.root&&(d=d._iPrev,!d.renderable||!d.__renderGroup););this.insertAfter(b,d)},f.WebGLRenderGroup.prototype.removeFilterBlocks=function(a,b){this.removeObject(a),this.removeObject(b)},f.WebGLRenderGroup.prototype.addDisplayObjectAndChildren=function(a){a.__renderGroup&&a.__renderGroup.removeDisplayObjectAndChildren(a);for(var b=a.first;b!=this.root.first&&(b=b._iPrev,!b.renderable||!b.__renderGroup););for(var c=a.last;c._iNext&&(c=c._iNext,!c.renderable||!c.__renderGroup););var d=a.first,e=a.last._iNext;do d.__renderGroup=this,d.renderable&&(this.insertObject(d,b,c),b=d),d=d._iNext;while(d!=e)},f.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren=function(a){if(a.__renderGroup==this){a.last;do a.__renderGroup=null,a.renderable&&this.removeObject(a),a=a._iNext;while(a)}},f.WebGLRenderGroup.prototype.insertObject=function(a,b,c){var d=b,e=c;if(a instanceof f.Sprite){var g,h;if(d instanceof f.Sprite){if(g=d.batch,g&&g.texture==a.texture.baseTexture&&g.blendMode==a.blendMode)return g.insertAfter(a,d),void 0}else g=d;if(e)if(e instanceof f.Sprite){if(h=e.batch){if(h.texture==a.texture.baseTexture&&h.blendMode==a.blendMode)return h.insertBefore(a,e),void 0;if(h==g){var i=g.split(e),j=f.WebGLRenderer.getBatch(),k=this.batchs.indexOf(g);return j.init(a),this.batchs.splice(k+1,0,j,i),void 0}}}else h=e;var j=f.WebGLRenderer.getBatch();if(j.init(a),g){var k=this.batchs.indexOf(g);this.batchs.splice(k+1,0,j)}else this.batchs.push(j)}else a instanceof f.TilingSprite?this.initTilingSprite(a):a instanceof f.Strip&&this.initStrip(a),this.insertAfter(a,d)},f.WebGLRenderGroup.prototype.insertAfter=function(a,b){if(b instanceof f.Sprite){var c=b.batch;if(c)if(c.tail==b){var d=this.batchs.indexOf(c);this.batchs.splice(d+1,0,a)}else{var e=c.split(b.__next),d=this.batchs.indexOf(c);this.batchs.splice(d+1,0,a,e)}else this.batchs.push(a)}else{var d=this.batchs.indexOf(b);this.batchs.splice(d+1,0,a)}},f.WebGLRenderGroup.prototype.removeObject=function(a){var b;if(a instanceof f.Sprite){var c=a.batch;if(!c)return;c.remove(a),0==c.size&&(b=c)}else b=a;if(b){var d=this.batchs.indexOf(b);if(-1==d)return;if(0==d||d==this.batchs.length-1)return this.batchs.splice(d,1),b instanceof f.WebGLBatch&&f.WebGLRenderer.returnBatch(b),void 0;if(this.batchs[d-1]instanceof f.WebGLBatch&&this.batchs[d+1]instanceof f.WebGLBatch&&this.batchs[d-1].texture==this.batchs[d+1].texture&&this.batchs[d-1].blendMode==this.batchs[d+1].blendMode)return this.batchs[d-1].merge(this.batchs[d+1]),b instanceof f.WebGLBatch&&f.WebGLRenderer.returnBatch(b),f.WebGLRenderer.returnBatch(this.batchs[d+1]),this.batchs.splice(d,2),void 0;this.batchs.splice(d,1),b instanceof f.WebGLBatch&&f.WebGLRenderer.returnBatch(b)}},f.WebGLRenderGroup.prototype.initTilingSprite=function(a){var b=this.gl;a.verticies=new Float32Array([0,0,a.width,0,a.width,a.height,0,a.height]),a.uvs=new Float32Array([0,0,1,0,1,1,0,1]),a.colors=new Float32Array([1,1,1,1]),a.indices=new Uint16Array([0,1,3,2]),a._vertexBuffer=b.createBuffer(),a._indexBuffer=b.createBuffer(),a._uvBuffer=b.createBuffer(),a._colorBuffer=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,a._vertexBuffer),b.bufferData(b.ARRAY_BUFFER,a.verticies,b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,a._uvBuffer),b.bufferData(b.ARRAY_BUFFER,a.uvs,b.DYNAMIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,a._colorBuffer),b.bufferData(b.ARRAY_BUFFER,a.colors,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,a._indexBuffer),b.bufferData(b.ELEMENT_ARRAY_BUFFER,a.indices,b.STATIC_DRAW),a.texture.baseTexture._glTexture?(b.bindTexture(b.TEXTURE_2D,a.texture.baseTexture._glTexture),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.REPEAT),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.REPEAT),a.texture.baseTexture._powerOf2=!0):a.texture.baseTexture._powerOf2=!0},f.WebGLRenderGroup.prototype.renderStrip=function(a,b){var c=this.gl,d=f.shaderProgram;c.useProgram(f.stripShaderProgram);var e=f.mat3.clone(a.worldTransform);f.mat3.transpose(e),c.uniformMatrix3fv(f.stripShaderProgram.translationMatrix,!1,e),c.uniform2f(f.stripShaderProgram.projectionVector,b.x,b.y),c.uniform1f(f.stripShaderProgram.alpha,a.worldAlpha),a.dirty?(a.dirty=!1,c.bindBuffer(c.ARRAY_BUFFER,a._vertexBuffer),c.bufferData(c.ARRAY_BUFFER,a.verticies,c.STATIC_DRAW),c.vertexAttribPointer(d.vertexPositionAttribute,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,a._uvBuffer),c.bufferData(c.ARRAY_BUFFER,a.uvs,c.STATIC_DRAW),c.vertexAttribPointer(d.textureCoordAttribute,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,a.texture.baseTexture._glTexture),c.bindBuffer(c.ARRAY_BUFFER,a._colorBuffer),c.bufferData(c.ARRAY_BUFFER,a.colors,c.STATIC_DRAW),c.vertexAttribPointer(d.colorAttribute,1,c.FLOAT,!1,0,0),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,a._indexBuffer),c.bufferData(c.ELEMENT_ARRAY_BUFFER,a.indices,c.STATIC_DRAW)):(c.bindBuffer(c.ARRAY_BUFFER,a._vertexBuffer),c.bufferSubData(c.ARRAY_BUFFER,0,a.verticies),c.vertexAttribPointer(d.vertexPositionAttribute,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,a._uvBuffer),c.vertexAttribPointer(d.textureCoordAttribute,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,a.texture.baseTexture._glTexture),c.bindBuffer(c.ARRAY_BUFFER,a._colorBuffer),c.vertexAttribPointer(d.colorAttribute,1,c.FLOAT,!1,0,0),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,a._indexBuffer)),c.drawElements(c.TRIANGLE_STRIP,a.indices.length,c.UNSIGNED_SHORT,0),c.useProgram(f.shaderProgram)},f.WebGLRenderGroup.prototype.renderTilingSprite=function(a,b){var c=this.gl;f.shaderProgram;var d=a.tilePosition,e=a.tileScale,g=d.x/a.texture.baseTexture.width,h=d.y/a.texture.baseTexture.height,i=a.width/a.texture.baseTexture.width/e.x,j=a.height/a.texture.baseTexture.height/e.y;a.uvs[0]=0-g,a.uvs[1]=0-h,a.uvs[2]=1*i-g,a.uvs[3]=0-h,a.uvs[4]=1*i-g,a.uvs[5]=1*j-h,a.uvs[6]=0-g,a.uvs[7]=1*j-h,c.bindBuffer(c.ARRAY_BUFFER,a._uvBuffer),c.bufferSubData(c.ARRAY_BUFFER,0,a.uvs),this.renderStrip(a,b)},f.WebGLRenderGroup.prototype.initStrip=function(a){var b=this.gl;this.shaderProgram,a._vertexBuffer=b.createBuffer(),a._indexBuffer=b.createBuffer(),a._uvBuffer=b.createBuffer(),a._colorBuffer=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,a._vertexBuffer),b.bufferData(b.ARRAY_BUFFER,a.verticies,b.DYNAMIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,a._uvBuffer),b.bufferData(b.ARRAY_BUFFER,a.uvs,b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,a._colorBuffer),b.bufferData(b.ARRAY_BUFFER,a.colors,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,a._indexBuffer),b.bufferData(b.ELEMENT_ARRAY_BUFFER,a.indices,b.STATIC_DRAW)},f.CanvasRenderer=function(a,b,c,d){this.transparent=d,this.width=a||800,this.height=b||600,this.view=c||document.createElement("canvas"),this.context=this.view.getContext("2d"),this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0},f.CanvasRenderer.prototype.constructor=f.CanvasRenderer,f.CanvasRenderer.prototype.render=function(a){f.texturesToUpdate=[],f.texturesToDestroy=[],f.visibleCount++,a.updateTransform(),this.view.style.backgroundColor==a.backgroundColorString||this.transparent||(this.view.style.backgroundColor=a.backgroundColorString),this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(a),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),f.Texture.frameUpdates.length>0&&(f.Texture.frameUpdates=[])},f.CanvasRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b},f.CanvasRenderer.prototype.renderDisplayObject=function(a){var b,c=this.context;c.globalCompositeOperation="source-over";var d=a.last._iNext;a=a.first;do if(b=a.worldTransform,a.visible)if(a.renderable){if(a instanceof f.Sprite){var e=a.texture.frame;e&&(c.globalAlpha=a.worldAlpha,c.setTransform(b[0],b[3],b[1],b[4],b[2],b[5]),c.drawImage(a.texture.baseTexture.source,e.x,e.y,e.width,e.height,a.anchor.x*-e.width,a.anchor.y*-e.height,e.width,e.height))}else if(a instanceof f.Strip)c.setTransform(b[0],b[3],b[1],b[4],b[2],b[5]),this.renderStrip(a);else if(a instanceof f.TilingSprite)c.setTransform(b[0],b[3],b[1],b[4],b[2],b[5]),this.renderTilingSprite(a);else if(a instanceof f.CustomRenderable)a.renderCanvas(this);else if(a instanceof f.Graphics)c.setTransform(b[0],b[3],b[1],b[4],b[2],b[5]),f.CanvasGraphics.renderGraphics(a,c);else if(a instanceof f.FilterBlock)if(a.open){c.save();var g=a.mask.alpha,h=a.mask.worldTransform;c.setTransform(h[0],h[3],h[1],h[4],h[2],h[5]),a.mask.worldAlpha=.5,c.worldAlpha=0,f.CanvasGraphics.renderGraphicsMask(a.mask,c),c.clip(),a.mask.worldAlpha=g}else c.restore();a=a._iNext}else a=a._iNext;else a=a.last._iNext;while(a!=d)},f.CanvasRenderer.prototype.renderStripFlat=function(a){var b=this.context,c=a.verticies;a.uvs;var d=c.length/2;this.count++,b.beginPath();for(var e=1;d-2>e;e++){var f=2*e,g=c[f],h=c[f+2],i=c[f+4],j=c[f+1],k=c[f+3],l=c[f+5];b.moveTo(g,j),b.lineTo(h,k),b.lineTo(i,l)}b.fillStyle="#FF0000",b.fill(),b.closePath()},f.CanvasRenderer.prototype.renderTilingSprite=function(a){var b=this.context;b.globalAlpha=a.worldAlpha,a.__tilePattern||(a.__tilePattern=b.createPattern(a.texture.baseTexture.source,"repeat")),b.beginPath();var c=a.tilePosition,d=a.tileScale;b.scale(d.x,d.y),b.translate(c.x,c.y),b.fillStyle=a.__tilePattern,b.fillRect(-c.x,-c.y,a.width/d.x,a.height/d.y),b.scale(1/d.x,1/d.y),b.translate(-c.x,-c.y),b.closePath()},f.CanvasRenderer.prototype.renderStrip=function(a){var b=this.context,c=a.verticies,d=a.uvs,e=c.length/2;this.count++;for(var f=1;e-2>f;f++){var g=2*f,h=c[g],i=c[g+2],j=c[g+4],k=c[g+1],l=c[g+3],m=c[g+5],n=d[g]*a.texture.width,o=d[g+2]*a.texture.width,p=d[g+4]*a.texture.width,q=d[g+1]*a.texture.height,r=d[g+3]*a.texture.height,s=d[g+5]*a.texture.height;b.save(),b.beginPath(),b.moveTo(h,k),b.lineTo(i,l),b.lineTo(j,m),b.closePath(),b.clip();var t=n*r+q*p+o*s-r*p-q*o-n*s,u=h*r+q*j+i*s-r*j-q*i-h*s,v=n*i+h*p+o*j-i*p-h*o-n*j,w=n*r*j+q*i*p+h*o*s-h*r*p-q*o*j-n*i*s,x=k*r+q*m+l*s-r*m-q*l-k*s,y=n*l+k*p+o*m-l*p-k*o-n*m,z=n*r*m+q*l*p+k*o*s-k*r*p-q*o*m-n*l*s;b.transform(u/t,x/t,v/t,y/t,w/t,z/t),b.drawImage(a.texture.baseTexture.source,0,0),b.restore()}},f.CanvasGraphics=function(){},f.CanvasGraphics.renderGraphics=function(a,b){for(var c=a.worldAlpha,d=0;d<a.graphicsData.length;d++){var e=a.graphicsData[d],g=e.points;if(b.strokeStyle=color="#"+("00000"+(0|e.lineColor).toString(16)).substr(-6),b.lineWidth=e.lineWidth,e.type===f.Graphics.POLY){b.beginPath(),b.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)b.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&b.closePath(),e.fill&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle=color="#"+("00000"+(0|e.fillColor).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.stroke())}else if(e.type===f.Graphics.RECT)void 0!=e.fillColor&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle=color="#"+("00000"+(0|e.fillColor).toString(16)).substr(-6),b.fillRect(g[0],g[1],g[2],g[3])),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.strokeRect(g[0],g[1],g[2],g[3]));else if(e.type==f.Graphics.CIRC)b.beginPath(),b.arc(g[0],g[1],g[2],0,2*Math.PI),b.closePath(),e.fill&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle=color="#"+("00000"+(0|e.fillColor).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.stroke());else if(e.type==f.Graphics.ELIP){var i=e.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;b.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;b.moveTo(l,t),b.bezierCurveTo(l,t-p,s-o,m,s,m),b.bezierCurveTo(s+o,m,q,t-p,q,t),b.bezierCurveTo(q,t+p,s+o,r,s,r),b.bezierCurveTo(s-o,r,l,t+p,l,t),b.closePath(),e.fill&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle=color="#"+("00000"+(0|e.fillColor).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.stroke())}}},f.CanvasGraphics.renderGraphicsMask=function(a,b){a.worldAlpha;var c=a.graphicsData.length;c>1&&(c=1,console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));for(var d=0;1>d;d++){var e=a.graphicsData[d],g=e.points;if(e.type==f.Graphics.POLY){b.beginPath(),b.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)b.lineTo(g[2*h],g[2*h+1]);g[0]==g[g.length-2]&&g[1]==g[g.length-1]&&b.closePath()}else if(e.type==f.Graphics.RECT)b.beginPath(),b.rect(g[0],g[1],g[2],g[3]),b.closePath();else if(e.type==f.Graphics.CIRC)b.beginPath(),b.arc(g[0],g[1],g[2],0,2*Math.PI),b.closePath();else if(e.type==f.Graphics.ELIP){var i=e.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;b.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;b.moveTo(l,t),b.bezierCurveTo(l,t-p,s-o,m,s,m),b.bezierCurveTo(s+o,m,q,t-p,q,t),b.bezierCurveTo(q,t+p,s+o,r,s,r),b.bezierCurveTo(s-o,r,l,t+p,l,t),b.closePath()}}},f.Graphics=function(){f.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor="black",this.graphicsData=[],this.currentPath={points:[]}},f.Graphics.prototype=Object.create(f.DisplayObjectContainer.prototype),f.Graphics.prototype.constructor=f.Graphics,f.Graphics.prototype.lineStyle=function(a,b,c){0==this.currentPath.points.length&&this.graphicsData.pop(),this.lineWidth=a||0,this.lineColor=b||0,this.lineAlpha=void 0==c?1:c,this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:f.Graphics.POLY},this.graphicsData.push(this.currentPath)
},f.Graphics.prototype.moveTo=function(a,b){0==this.currentPath.points.length&&this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:f.Graphics.POLY},this.currentPath.points.push(a,b),this.graphicsData.push(this.currentPath)},f.Graphics.prototype.lineTo=function(a,b){this.currentPath.points.push(a,b),this.dirty=!0},f.Graphics.prototype.beginFill=function(a,b){this.filling=!0,this.fillColor=a||0,this.fillAlpha=void 0==b?1:b},f.Graphics.prototype.endFill=function(){this.filling=!1,this.fillColor=null,this.fillAlpha=1},f.Graphics.prototype.drawRect=function(a,b,c,d){0==this.currentPath.points.length&&this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,d],type:f.Graphics.RECT},this.graphicsData.push(this.currentPath),this.dirty=!0},f.Graphics.prototype.drawCircle=function(a,b,c){0==this.currentPath.points.length&&this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,c],type:f.Graphics.CIRC},this.graphicsData.push(this.currentPath),this.dirty=!0},f.Graphics.prototype.drawElipse=function(a,b,c,d){0==this.currentPath.points.length&&this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,d],type:f.Graphics.ELIP},this.graphicsData.push(this.currentPath),this.dirty=!0},f.Graphics.prototype.clear=function(){this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[]},f.Graphics.POLY=0,f.Graphics.RECT=1,f.Graphics.CIRC=2,f.Graphics.ELIP=3,f.Strip=function(a,b,c){f.DisplayObjectContainer.call(this),this.texture=a,this.blendMode=f.blendModes.NORMAL;try{this.uvs=new Float32Array([0,1,1,1,1,0,0,1]),this.verticies=new Float32Array([0,0,0,0,0,0,0,0,0]),this.colors=new Float32Array([1,1,1,1]),this.indices=new Uint16Array([0,1,2,3])}catch(d){this.uvs=[0,1,1,1,1,0,0,1],this.verticies=[0,0,0,0,0,0,0,0,0],this.colors=[1,1,1,1],this.indices=[0,1,2,3]}this.width=b,this.height=c,a.baseTexture.hasLoaded?(this.width=this.texture.frame.width,this.height=this.texture.frame.height,this.updateFrame=!0):(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},f.Strip.prototype=Object.create(f.DisplayObjectContainer.prototype),f.Strip.prototype.constructor=f.Strip,f.Strip.prototype.setTexture=function(a){this.texture=a,this.width=a.frame.width,this.height=a.frame.height,this.updateFrame=!0},f.Strip.prototype.onTextureUpdate=function(){this.updateFrame=!0},f.Rope=function(a,b){f.Strip.call(this,a),this.points=b;try{this.verticies=new Float32Array(4*b.length),this.uvs=new Float32Array(4*b.length),this.colors=new Float32Array(2*b.length),this.indices=new Uint16Array(2*b.length)}catch(c){this.verticies=verticies,this.uvs=uvs,this.colors=colors,this.indices=indices}this.refresh()},f.Rope.prototype=Object.create(f.Strip.prototype),f.Rope.prototype.constructor=f.Rope,f.Rope.prototype.refresh=function(){var a=this.points;if(!(a.length<1)){var b=this.uvs,c=this.indices,d=this.colors,e=a[0],f=a[0];this.count-=.2,b[0]=0,b[1]=1,b[2]=0,b[3]=1,d[0]=1,d[1]=1,c[0]=0,c[1]=1;for(var g=a.length,h=1;g>h;h++){var f=a[h],i=4*h,j=h/(g-1);h%2?(b[i]=j,b[i+1]=0,b[i+2]=j,b[i+3]=1):(b[i]=j,b[i+1]=0,b[i+2]=j,b[i+3]=1),i=2*h,d[i]=1,d[i+1]=1,i=2*h,c[i]=i,c[i+1]=i+1,e=f}}},f.Rope.prototype.updateTransform=function(){var a=this.points;if(!(a.length<1)){var b,c=this.verticies,d=a[0],e={x:0,y:0},g=a[0];this.count-=.2,c[0]=g.x+e.x,c[1]=g.y+e.y,c[2]=g.x-e.x,c[3]=g.y-e.y;for(var h=a.length,i=1;h>i;i++){var g=a[i],j=4*i;b=i<a.length-1?a[i+1]:g,e.y=-(b.x-d.x),e.x=b.y-d.y;var k=10*(1-i/(h-1));k>1&&(k=1);var l=Math.sqrt(e.x*e.x+e.y*e.y),m=this.texture.height/2;e.x/=l,e.y/=l,e.x*=m,e.y*=m,c[j]=g.x+e.x,c[j+1]=g.y+e.y,c[j+2]=g.x-e.x,c[j+3]=g.y-e.y,d=g}f.DisplayObjectContainer.prototype.updateTransform.call(this)}},f.Rope.prototype.setTexture=function(a){this.texture=a,this.updateFrame=!0},f.TilingSprite=function(a,b,c){f.DisplayObjectContainer.call(this),this.texture=a,this.width=b,this.height=c,this.tileScale=new f.Point(1,1),this.tilePosition=new f.Point(0,0),this.renderable=!0,this.blendMode=f.blendModes.NORMAL},f.TilingSprite.prototype=Object.create(f.DisplayObjectContainer.prototype),f.TilingSprite.prototype.constructor=f.TilingSprite,f.TilingSprite.prototype.setTexture=function(a){this.texture=a,this.updateFrame=!0},f.TilingSprite.prototype.onTextureUpdate=function(){this.updateFrame=!0},f.Spine=function(a){if(f.DisplayObjectContainer.call(this),this.spineData=f.AnimCache[a],!this.spineData)throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+a);this.skeleton=new l.Skeleton(this.spineData),this.skeleton.updateWorldTransform(),this.stateData=new l.AnimationStateData(this.spineData),this.state=new l.AnimationState(this.stateData),this.slotContainers=[];for(var b=0,c=this.skeleton.drawOrder.length;c>b;b++){var d=this.skeleton.drawOrder[b],e=d.attachment,g=new f.DisplayObjectContainer;if(this.slotContainers.push(g),this.addChild(g),e instanceof l.RegionAttachment){var h=e.rendererObject.name,i=this.createSprite(d,e.rendererObject);d.currentSprite=i,d.currentSpriteName=h,g.addChild(i)}}},f.Spine.prototype=Object.create(f.DisplayObjectContainer.prototype),f.Spine.prototype.constructor=f.Spine,f.Spine.prototype.updateTransform=function(){this.lastTime=this.lastTime||Date.now();var a=.001*(Date.now()-this.lastTime);this.lastTime=Date.now(),this.state.update(a),this.state.apply(this.skeleton),this.skeleton.updateWorldTransform();for(var b=this.skeleton.drawOrder,c=0,d=b.length;d>c;c++){var e=b[c],g=e.attachment,h=this.slotContainers[c];if(g instanceof l.RegionAttachment){if(g.rendererObject&&(!e.currentSpriteName||e.currentSpriteName!=g.name)){var i=g.rendererObject.name;if(void 0!==e.currentSprite&&(e.currentSprite.visible=!1),e.sprites=e.sprites||{},void 0!==e.sprites[i])e.sprites[i].visible=!0;else{var j=this.createSprite(e,g.rendererObject);h.addChild(j)}e.currentSprite=e.sprites[i],e.currentSpriteName=i}h.visible=!0;var k=e.bone;h.position.x=k.worldX+g.x*k.m00+g.y*k.m01,h.position.y=k.worldY+g.x*k.m10+g.y*k.m11,h.scale.x=k.worldScaleX,h.scale.y=k.worldScaleY,h.rotation=-(e.bone.worldRotation*Math.PI/180)}else h.visible=!1}f.DisplayObjectContainer.prototype.updateTransform.call(this)},f.Spine.prototype.createSprite=function(a,b){var c=f.TextureCache[b.name]?b.name:b.name+".png",d=new f.Sprite(f.Texture.fromFrame(c));return d.scale=b.scale,d.rotation=b.rotation,d.anchor.x=d.anchor.y=.5,a.sprites=a.sprites||{},a.sprites[b.name]=d,d};var l={};l.BoneData=function(a,b){this.name=a,this.parent=b},l.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1},l.SlotData=function(a,b){this.name=a,this.boneData=b},l.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null},l.Bone=function(a,b){this.data=a,this.parent=b,this.setToSetupPose()},l.Bone.yDown=!1,l.Bone.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,updateWorldTransform:function(a,b){var c=this.parent;null!=c?(this.worldX=this.x*c.m00+this.y*c.m01+c.worldX,this.worldY=this.x*c.m10+this.y*c.m11+c.worldY,this.worldScaleX=c.worldScaleX*this.scaleX,this.worldScaleY=c.worldScaleY*this.scaleY,this.worldRotation=c.worldRotation+this.rotation):(this.worldX=this.x,this.worldY=this.y,this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY,this.worldRotation=this.rotation);var d=this.worldRotation*Math.PI/180,e=Math.cos(d),f=Math.sin(d);this.m00=e*this.worldScaleX,this.m10=f*this.worldScaleX,this.m01=-f*this.worldScaleY,this.m11=e*this.worldScaleY,a&&(this.m00=-this.m00,this.m01=-this.m01),b&&(this.m10=-this.m10,this.m11=-this.m11),l.Bone.yDown&&(this.m10=-this.m10,this.m11=-this.m11)},setToSetupPose:function(){var a=this.data;this.x=a.x,this.y=a.y,this.rotation=a.rotation,this.scaleX=a.scaleX,this.scaleY=a.scaleY}},l.Slot=function(a,b,c){this.data=a,this.skeleton=b,this.bone=c,this.setToSetupPose()},l.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,setAttachment:function(a){this.attachment=a,this._attachmentTime=this.skeleton.time},setAttachmentTime:function(a){this._attachmentTime=this.skeleton.time-a},getAttachmentTime:function(){return this.skeleton.time-this._attachmentTime},setToSetupPose:function(){var a=this.data;this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a;for(var b=this.skeleton.data.slots,c=0,d=b.length;d>c;c++)if(b[c]==a){this.setAttachment(a.attachmentName?this.skeleton.getAttachmentBySlotIndex(c,a.attachmentName):null);break}}},l.Skin=function(a){this.name=a,this.attachments={}},l.Skin.prototype={addAttachment:function(a,b,c){this.attachments[a+":"+b]=c},getAttachment:function(a,b){return this.attachments[a+":"+b]},_attachAll:function(a,b){for(var c in b.attachments){var d=c.indexOf(":"),e=parseInt(c.substring(0,d)),f=c.substring(d+1),g=a.slots[e];if(g.attachment&&g.attachment.name==f){var h=this.getAttachment(e,f);h&&g.setAttachment(h)}}}},l.Animation=function(a,b,c){this.name=a,this.timelines=b,this.duration=c},l.Animation.prototype={apply:function(a,b,c){c&&0!=this.duration&&(b%=this.duration);for(var d=this.timelines,e=0,f=d.length;f>e;e++)d[e].apply(a,b,1)},mix:function(a,b,c,d){c&&0!=this.duration&&(b%=this.duration);for(var e=this.timelines,f=0,g=e.length;g>f;f++)e[f].apply(a,b,d)}},l.binarySearch=function(a,b,c){var d=0,e=Math.floor(a.length/c)-2;if(0==e)return c;for(var f=e>>>1;;){if(a[(f+1)*c]<=b?d=f+1:e=f,d==e)return(d+1)*c;f=d+e>>>1}},l.linearSearch=function(a,b,c){for(var d=0,e=a.length-c;e>=d;d+=c)if(a[d]>b)return d;return-1},l.Curves=function(a){this.curves=[],this.curves.length=6*(a-1)},l.Curves.prototype={setLinear:function(a){this.curves[6*a]=0},setStepped:function(a){this.curves[6*a]=-1},setCurve:function(a,b,c,d,e){var f=.1,g=f*f,h=g*f,i=3*f,j=3*g,k=6*g,l=6*h,m=2*-b+d,n=2*-c+e,o=3*(b-d)+1,p=3*(c-e)+1,q=6*a,r=this.curves;r[q]=b*i+m*j+o*h,r[q+1]=c*i+n*j+p*h,r[q+2]=m*k+o*l,r[q+3]=n*k+p*l,r[q+4]=o*l,r[q+5]=p*l},getCurvePercent:function(a,b){b=0>b?0:b>1?1:b;var c=6*a,d=this.curves,e=d[c];if(!e)return b;if(-1==e)return 0;for(var f=d[c+1],g=d[c+2],h=d[c+3],i=d[c+4],j=d[c+5],k=e,l=f,m=8;;){if(k>=b){var n=k-e,o=l-f;return o+(l-o)*(b-n)/(k-n)}if(0==m)break;m--,e+=g,f+=h,g+=i,h+=j,k+=e,l+=f}return l+(1-l)*(b-k)/(1-k)}},l.RotateTimeline=function(a){this.curves=new l.Curves(a),this.frames=[],this.frames.length=2*a},l.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(a,b,c){a*=2,this.frames[a]=b,this.frames[a+1]=c},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-2]){for(var f=e.data.rotation+d[d.length-1]-e.rotation;f>180;)f-=360;for(;-180>f;)f+=360;return e.rotation+=f*c,void 0}var g=l.binarySearch(d,b,2),h=d[g-1],i=d[g],j=1-(b-i)/(d[g-2]-i);j=this.curves.getCurvePercent(g/2-1,j);for(var f=d[g+1]-h;f>180;)f-=360;for(;-180>f;)f+=360;for(f=e.data.rotation+(h+f*j)-e.rotation;f>180;)f-=360;for(;-180>f;)f+=360;e.rotation+=f*c}}},l.TranslateTimeline=function(a){this.curves=new l.Curves(a),this.frames=[],this.frames.length=3*a},l.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.x+=(e.data.x+d[d.length-2]-e.x)*c,e.y+=(e.data.y+d[d.length-1]-e.y)*c,void 0;var f=l.binarySearch(d,b,3),g=d[f-2],h=d[f-1],i=d[f],j=1-(b-i)/(d[f+-3]-i);j=this.curves.getCurvePercent(f/3-1,j),e.x+=(e.data.x+g+(d[f+1]-g)*j-e.x)*c,e.y+=(e.data.y+h+(d[f+2]-h)*j-e.y)*c}}},l.ScaleTimeline=function(a){this.curves=new l.Curves(a),this.frames=[],this.frames.length=3*a},l.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.scaleX+=(e.data.scaleX-1+d[d.length-2]-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+d[d.length-1]-e.scaleY)*c,void 0;var f=l.binarySearch(d,b,3),g=d[f-2],h=d[f-1],i=d[f],j=1-(b-i)/(d[f+-3]-i);j=this.curves.getCurvePercent(f/3-1,j),e.scaleX+=(e.data.scaleX-1+g+(d[f+1]-g)*j-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+h+(d[f+2]-h)*j-e.scaleY)*c}}},l.ColorTimeline=function(a){this.curves=new l.Curves(a),this.frames=[],this.frames.length=5*a},l.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(c,d){c*=5,this.frames[c]=d,this.frames[c+1]=r,this.frames[c+2]=g,this.frames[c+3]=b,this.frames[c+4]=a},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.slots[this.slotIndex];if(b>=d[d.length-5]){var f=d.length-1;return e.r=d[f-3],e.g=d[f-2],e.b=d[f-1],e.a=d[f],void 0}var g=l.binarySearch(d,b,5),h=d[g-4],i=d[g-3],j=d[g-2],k=d[g-1],m=d[g],n=1-(b-m)/(d[g-5]-m);n=this.curves.getCurvePercent(g/5-1,n);var o=h+(d[g+1]-h)*n,p=i+(d[g+2]-i)*n,q=j+(d[g+3]-j)*n,r=k+(d[g+4]-k)*n;1>c?(e.r+=(o-e.r)*c,e.g+=(p-e.g)*c,e.b+=(q-e.b)*c,e.a+=(r-e.a)*c):(e.r=o,e.g=p,e.b=q,e.a=r)}}},l.AttachmentTimeline=function(a){this.curves=new l.Curves(a),this.frames=[],this.frames.length=a,this.attachmentNames=[],this.attachmentNames.length=a},l.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length},setFrame:function(a,b,c){this.frames[a]=b,this.attachmentNames[a]=c},apply:function(a,b){var c=this.frames;if(!(b<c[0])){var d;d=b>=c[c.length-1]?c.length-1:l.binarySearch(c,b,1)-1;var e=this.attachmentNames[d];a.slots[this.slotIndex].setAttachment(e?a.getAttachmentBySlotIndex(this.slotIndex,e):null)}}},l.SkeletonData=function(){this.bones=[],this.slots=[],this.skins=[],this.animations=[]},l.SkeletonData.prototype={defaultSkin:null,findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return slot[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSkin:function(a){for(var b=this.skins,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findAnimation:function(a){for(var b=this.animations,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null}},l.Skeleton=function(a){this.data=a,this.bones=[];for(var b=0,c=a.bones.length;c>b;b++){var d=a.bones[b],e=d.parent?this.bones[a.bones.indexOf(d.parent)]:null;this.bones.push(new l.Bone(d,e))}this.slots=[],this.drawOrder=[];for(var b=0,c=a.slots.length;c>b;b++){var f=a.slots[b],g=this.bones[a.bones.indexOf(f.boneData)],h=new l.Slot(f,this,g);this.slots.push(h),this.drawOrder.push(h)}},l.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:!1,flipY:!1,updateWorldTransform:function(){for(var a=this.flipX,b=this.flipY,c=this.bones,d=0,e=c.length;e>d;d++)c[d].updateWorldTransform(a,b)},setToSetupPose:function(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()},setBonesToSetupPose:function(){for(var a=this.bones,b=0,c=a.length;c>b;b++)a[b].setToSetupPose()},setSlotsToSetupPose:function(){for(var a=this.slots,b=0,c=a.length;c>b;b++)a[b].setToSetupPose(b)},getRootBone:function(){return 0==this.bones.length?null:this.bones[0]},findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},setSkinByName:function(a){var b=this.data.findSkin(a);if(!b)throw"Skin not found: "+a;this.setSkin(b)},setSkin:function(a){this.skin&&a&&a._attachAll(this,this.skin),this.skin=a},getAttachmentBySlotName:function(a,b){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a),b)},getAttachmentBySlotIndex:function(a,b){if(this.skin){var c=this.skin.getAttachment(a,b);if(c)return c}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(a,b):null},setAttachment:function(a,b){for(var c=this.slots,d=0,e=c.size;e>d;d++){var f=c[d];if(f.data.name==a){var g=null;if(b&&(g=this.getAttachment(d,b),null==g))throw"Attachment not found: "+b+", for slot: "+a;return f.setAttachment(g),void 0}}throw"Slot not found: "+a},update:function(a){time+=a}},l.AttachmentType={region:0},l.RegionAttachment=function(){this.offset=[],this.offset.length=8,this.uvs=[],this.uvs.length=8},l.RegionAttachment.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(a,b,c,d,e){var f=this.uvs;e?(f[2]=a,f[3]=d,f[4]=a,f[5]=b,f[6]=c,f[7]=b,f[0]=c,f[1]=d):(f[0]=a,f[1]=d,f[2]=a,f[3]=b,f[4]=c,f[5]=b,f[6]=c,f[7]=d)},updateOffset:function(){var a=this.width/this.regionOriginalWidth*this.scaleX,b=this.height/this.regionOriginalHeight*this.scaleY,c=-this.width/2*this.scaleX+this.regionOffsetX*a,d=-this.height/2*this.scaleY+this.regionOffsetY*b,e=c+this.regionWidth*a,f=d+this.regionHeight*b,g=this.rotation*Math.PI/180,h=Math.cos(g),i=Math.sin(g),j=c*h+this.x,k=c*i,l=d*h+this.y,m=d*i,n=e*h+this.x,o=e*i,p=f*h+this.y,q=f*i,r=this.offset;r[0]=j-m,r[1]=l+k,r[2]=j-q,r[3]=p+k,r[4]=n-q,r[5]=p+o,r[6]=n-m,r[7]=l+o},computeVertices:function(a,b,c,d){a+=c.worldX,b+=c.worldY;var e=c.m00,f=c.m01,g=c.m10,h=c.m11,i=this.offset;d[0]=i[0]*e+i[1]*f+a,d[1]=i[0]*g+i[1]*h+b,d[2]=i[2]*e+i[3]*f+a,d[3]=i[2]*g+i[3]*h+b,d[4]=i[4]*e+i[5]*f+a,d[5]=i[4]*g+i[5]*h+b,d[6]=i[6]*e+i[7]*f+a,d[7]=i[6]*g+i[7]*h+b}},l.AnimationStateData=function(a){this.skeletonData=a,this.animationToMixTime={}},l.AnimationStateData.prototype={defaultMix:0,setMixByName:function(a,b,c){var d=this.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;var e=this.skeletonData.findAnimation(b);if(!e)throw"Animation not found: "+b;this.setMix(d,e,c)},setMix:function(a,b,c){this.animationToMixTime[a.name+":"+b.name]=c},getMix:function(a,b){var c=this.animationToMixTime[a.name+":"+b.name];return c?c:this.defaultMix}},l.AnimationState=function(a){this.data=a,this.queue=[]},l.AnimationState.prototype={current:null,previous:null,currentTime:0,previousTime:0,currentLoop:!1,previousLoop:!1,mixTime:0,mixDuration:0,update:function(a){if(this.currentTime+=a,this.previousTime+=a,this.mixTime+=a,this.queue.length>0){var b=this.queue[0];this.currentTime>=b.delay&&(this._setAnimation(b.animation,b.loop),this.queue.shift())}},apply:function(a){if(this.current)if(this.previous){this.previous.apply(a,this.previousTime,this.previousLoop);var b=this.mixTime/this.mixDuration;b>=1&&(b=1,this.previous=null),this.current.mix(a,this.currentTime,this.currentLoop,b)}else this.current.apply(a,this.currentTime,this.currentLoop)},clearAnimation:function(){this.previous=null,this.current=null,this.queue.length=0},_setAnimation:function(a,b){this.previous=null,a&&this.current&&(this.mixDuration=this.data.getMix(this.current,a),this.mixDuration>0&&(this.mixTime=0,this.previous=this.current,this.previousTime=this.currentTime,this.previousLoop=this.currentLoop)),this.current=a,this.currentLoop=b,this.currentTime=0},setAnimationByName:function(a,b){var c=this.data.skeletonData.findAnimation(a);if(!c)throw"Animation not found: "+a;this.setAnimation(c,b)},setAnimation:function(a,b){this.queue.length=0,this._setAnimation(a,b)},addAnimationByName:function(a,b,c){var d=this.data.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;this.addAnimation(d,b,c)},addAnimation:function(a,b,c){var d={};if(d.animation=a,d.loop=b,!c||0>=c){var e=0==this.queue.length?this.current:this.queue[this.queue.length-1].animation;c=null!=e?e.duration-this.data.getMix(e,a)+(c||0):0}d.delay=c,this.queue.push(d)},isComplete:function(){return!this.current||this.currentTime>=this.current.duration}},l.SkeletonJson=function(a){this.attachmentLoader=a},l.SkeletonJson.prototype={scale:1,readSkeletonData:function(a){for(var b=new l.SkeletonData,c=a.bones,d=0,e=c.length;e>d;d++){var f=c[d],g=null;if(f.parent&&(g=b.findBone(f.parent),!g))throw"Parent bone not found: "+f.parent;var h=new l.BoneData(f.name,g);h.length=(f.length||0)*this.scale,h.x=(f.x||0)*this.scale,h.y=(f.y||0)*this.scale,h.rotation=f.rotation||0,h.scaleX=f.scaleX||1,h.scaleY=f.scaleY||1,b.bones.push(h)}for(var i=a.slots,d=0,e=i.length;e>d;d++){var j=i[d],h=b.findBone(j.bone);if(!h)throw"Slot bone not found: "+j.bone;var k=new l.SlotData(j.name,h),m=j.color;m&&(k.r=l.SkeletonJson.toColor(m,0),k.g=l.SkeletonJson.toColor(m,1),k.b=l.SkeletonJson.toColor(m,2),k.a=l.SkeletonJson.toColor(m,3)),k.attachmentName=j.attachment,b.slots.push(k)}var n=a.skins;for(var o in n)if(n.hasOwnProperty(o)){var p=n[o],q=new l.Skin(o);for(var r in p)if(p.hasOwnProperty(r)){var s=b.findSlotIndex(r),t=p[r];for(var u in t)if(t.hasOwnProperty(u)){var v=this.readAttachment(q,u,t[u]);null!=v&&q.addAttachment(s,u,v)}}b.skins.push(q),"default"==q.name&&(b.defaultSkin=q)}var w=a.animations;for(var x in w)w.hasOwnProperty(x)&&this.readAnimation(x,w[x],b);return b},readAttachment:function(a,b,c){b=c.name||b;var d=l.AttachmentType[c.type||"region"];if(d==l.AttachmentType.region){var e=new l.RegionAttachment;return e.x=(c.x||0)*this.scale,e.y=(c.y||0)*this.scale,e.scaleX=c.scaleX||1,e.scaleY=c.scaleY||1,e.rotation=c.rotation||0,e.width=(c.width||32)*this.scale,e.height=(c.height||32)*this.scale,e.updateOffset(),e.rendererObject={},e.rendererObject.name=b,e.rendererObject.scale={},e.rendererObject.scale.x=e.scaleX,e.rendererObject.scale.y=e.scaleY,e.rendererObject.rotation=-e.rotation*Math.PI/180,e}throw"Unknown attachment type: "+d},readAnimation:function(a,b,c){var d=[],e=0,f=b.bones;for(var g in f)if(f.hasOwnProperty(g)){var h=c.findBoneIndex(g);if(-1==h)throw"Bone not found: "+g;var i=f[g];for(var j in i)if(i.hasOwnProperty(j)){var k=i[j];if("rotate"==j){var m=new l.RotateTimeline(k.length);m.boneIndex=h;for(var n=0,o=0,p=k.length;p>o;o++){var q=k[o];m.setFrame(n,q.time,q.angle),l.SkeletonJson.readCurve(m,n,q),n++}d.push(m),e=Math.max(e,m.frames[2*m.getFrameCount()-2])}else{if("translate"!=j&&"scale"!=j)throw"Invalid timeline type for a bone: "+j+" ("+g+")";var m,r=1;"scale"==j?m=new l.ScaleTimeline(k.length):(m=new l.TranslateTimeline(k.length),r=this.scale),m.boneIndex=h;for(var n=0,o=0,p=k.length;p>o;o++){var q=k[o],s=(q.x||0)*r,t=(q.y||0)*r;m.setFrame(n,q.time,s,t),l.SkeletonJson.readCurve(m,n,q),n++}d.push(m),e=Math.max(e,m.frames[3*m.getFrameCount()-3])}}}var u=b.slots;for(var v in u)if(u.hasOwnProperty(v)){var w=u[v],x=c.findSlotIndex(v);for(var j in w)if(w.hasOwnProperty(j)){var k=w[j];if("color"==j){var m=new l.ColorTimeline(k.length);m.slotIndex=x;for(var n=0,o=0,p=k.length;p>o;o++){var q=k[o],y=q.color,z=l.SkeletonJson.toColor(y,0),A=l.SkeletonJson.toColor(y,1),B=l.SkeletonJson.toColor(y,2),C=l.SkeletonJson.toColor(y,3);m.setFrame(n,q.time,z,A,B,C),l.SkeletonJson.readCurve(m,n,q),n++}d.push(m),e=Math.max(e,m.frames[5*m.getFrameCount()-5])}else{if("attachment"!=j)throw"Invalid timeline type for a slot: "+j+" ("+v+")";var m=new l.AttachmentTimeline(k.length);m.slotIndex=x;for(var n=0,o=0,p=k.length;p>o;o++){var q=k[o];m.setFrame(n++,q.time,q.name)}d.push(m),e=Math.max(e,m.frames[m.getFrameCount()-1])}}}c.animations.push(new l.Animation(a,d,e))}},l.SkeletonJson.readCurve=function(a,b,c){var d=c.curve;d&&("stepped"==d?a.curves.setStepped(b):d instanceof Array&&a.curves.setCurve(b,d[0],d[1],d[2],d[3]))},l.SkeletonJson.toColor=function(a,b){if(8!=a.length)throw"Color hexidecimal length must be 8, recieved: "+a;return parseInt(a.substring(2*b,2),16)/255},l.Atlas=function(a,b){this.textureLoader=b,this.pages=[],this.regions=[];var c=new l.AtlasReader(a),d=[];d.length=4;for(var e=null;;){var f=c.readLine();if(null==f)break;if(f=c.trim(f),0==f.length)e=null;else if(e){var g=new l.AtlasRegion;g.name=f,g.page=e,g.rotate="true"==c.readValue(),c.readTuple(d);var h=parseInt(d[0]),i=parseInt(d[1]);c.readTuple(d);var j=parseInt(d[0]),k=parseInt(d[1]);g.u=h/e.width,g.v=i/e.height,g.rotate?(g.u2=(h+k)/e.width,g.v2=(i+j)/e.height):(g.u2=(h+j)/e.width,g.v2=(i+k)/e.height),g.x=h,g.y=i,g.width=Math.abs(j),g.height=Math.abs(k),4==c.readTuple(d)&&(g.splits=[parseInt(d[0]),parseInt(d[1]),parseInt(d[2]),parseInt(d[3])],4==c.readTuple(d)&&(g.pads=[parseInt(d[0]),parseInt(d[1]),parseInt(d[2]),parseInt(d[3])],c.readTuple(d))),g.originalWidth=parseInt(d[0]),g.originalHeight=parseInt(d[1]),c.readTuple(d),g.offsetX=parseInt(d[0]),g.offsetY=parseInt(d[1]),g.index=parseInt(c.readValue()),this.regions.push(g)}else{e=new l.AtlasPage,e.name=f,e.format=l.Atlas.Format[c.readValue()],c.readTuple(d),e.minFilter=l.Atlas.TextureFilter[d[0]],e.magFilter=l.Atlas.TextureFilter[d[1]];var m=c.readValue();e.uWrap=l.Atlas.TextureWrap.clampToEdge,e.vWrap=l.Atlas.TextureWrap.clampToEdge,"x"==m?e.uWrap=l.Atlas.TextureWrap.repeat:"y"==m?e.vWrap=l.Atlas.TextureWrap.repeat:"xy"==m&&(e.uWrap=e.vWrap=l.Atlas.TextureWrap.repeat),b.load(e,f),this.pages.push(e)}}},l.Atlas.prototype={findRegion:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},dispose:function(){for(var a=this.pages,b=0,c=a.length;c>b;b++)this.textureLoader.unload(a[b].rendererObject)},updateUVs:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++){var e=b[c];e.page==a&&(e.u=e.x/a.width,e.v=e.y/a.height,e.rotate?(e.u2=(e.x+e.height)/a.width,e.v2=(e.y+e.width)/a.height):(e.u2=(e.x+e.width)/a.width,e.v2=(e.y+e.height)/a.height))}}},l.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6},l.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6},l.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2},l.AtlasPage=function(){},l.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0},l.AtlasRegion=function(){},l.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:!1,splits:null,pads:null},l.AtlasReader=function(a){this.lines=a.split(/\r\n|\r|\n/)},l.AtlasReader.prototype={index:0,trim:function(a){return a.replace(/^\s+|\s+$/g,"")},readLine:function(){return this.index>=this.lines.length?null:this.lines[this.index++]},readValue:function(){var a=this.readLine(),b=a.indexOf(":");if(-1==b)throw"Invalid line: "+a;return this.trim(a.substring(b+1))},readTuple:function(a){var b=this.readLine(),c=b.indexOf(":");if(-1==c)throw"Invalid line: "+b;for(var d=0,e=c+1;3>d;d++){var f=b.indexOf(",",e);if(-1==f){if(0==d)throw"Invalid line: "+b;break}a[d]=this.trim(b.substr(e,f-e)),e=f+1}return a[d]=this.trim(b.substring(e)),d+1}},l.AtlasAttachmentLoader=function(a){this.atlas=a},l.AtlasAttachmentLoader.prototype={newAttachment:function(a,b,c){switch(b){case l.AttachmentType.region:var d=this.atlas.findRegion(c);if(!d)throw"Region not found in atlas: "+c+" ("+b+")";var e=new l.RegionAttachment(c);return e.rendererObject=d,e.setUVs(d.u,d.v,d.u2,d.v2,d.rotate),e.regionOffsetX=d.offsetX,e.regionOffsetY=d.offsetY,e.regionWidth=d.width,e.regionHeight=d.height,e.regionOriginalWidth=d.originalWidth,e.regionOriginalHeight=d.originalHeight,e}throw"Unknown attachment type: "+b}},f.AnimCache={},l.Bone.yDown=!0,f.CustomRenderable=function(){f.DisplayObject.call(this)},f.CustomRenderable.prototype=Object.create(f.DisplayObject.prototype),f.CustomRenderable.prototype.constructor=f.CustomRenderable,f.CustomRenderable.prototype.renderCanvas=function(){},f.CustomRenderable.prototype.initWebGL=function(){},f.CustomRenderable.prototype.renderWebGL=function(){},f.BaseTextureCache={},f.texturesToUpdate=[],f.texturesToDestroy=[],f.BaseTexture=function(a){if(f.EventTarget.call(this),this.width=100,this.height=100,this.hasLoaded=!1,this.source=a,a){if(this.source instanceof Image||this.source instanceof HTMLImageElement)if(this.source.complete)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,f.texturesToUpdate.push(this);else{var b=this;this.source.onload=function(){b.hasLoaded=!0,b.width=b.source.width,b.height=b.source.height,f.texturesToUpdate.push(b),b.dispatchEvent({type:"loaded",content:b})}}else this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,f.texturesToUpdate.push(this);this._powerOf2=!1}},f.BaseTexture.prototype.constructor=f.BaseTexture,f.BaseTexture.prototype.destroy=function(){this.source instanceof Image&&(this.source.src=null),this.source=null,f.texturesToDestroy.push(this)},f.BaseTexture.fromImage=function(a,b){var c=f.BaseTextureCache[a];if(!c){var d=new Image;b&&(d.crossOrigin=""),d.src=a,c=new f.BaseTexture(d),f.BaseTextureCache[a]=c}return c},f.TextureCache={},f.FrameCache={},f.Texture=function(a,b){if(f.EventTarget.call(this),b||(this.noFrame=!0,b=new f.Rectangle(0,0,1,1)),a instanceof f.Texture&&(a=a.baseTexture),this.baseTexture=a,this.frame=b,this.trim=new f.Point,this.scope=this,a.hasLoaded)this.noFrame&&(b=new f.Rectangle(0,0,a.width,a.height)),this.setFrame(b);else{var c=this;a.addEventListener("loaded",function(){c.onBaseTextureLoaded()})}},f.Texture.prototype.constructor=f.Texture,f.Texture.prototype.onBaseTextureLoaded=function(){var a=this.baseTexture;a.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new f.Rectangle(0,0,a.width,a.height)),this.noFrame=!1,this.width=this.frame.width,this.height=this.frame.height,this.scope.dispatchEvent({type:"update",content:this})},f.Texture.prototype.destroy=function(a){a&&this.baseTexture.destroy()},f.Texture.prototype.setFrame=function(a){if(this.frame=a,this.width=a.width,this.height=a.height,a.x+a.width>this.baseTexture.width||a.y+a.height>this.baseTexture.height)throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.updateFrame=!0,f.Texture.frameUpdates.push(this)},f.Texture.fromImage=function(a,b){var c=f.TextureCache[a];return c||(c=new f.Texture(f.BaseTexture.fromImage(a,b)),f.TextureCache[a]=c),c},f.Texture.fromFrame=function(a){var b=f.TextureCache[a];if(!b)throw new Error("The frameId '"+a+"' does not exist in the texture cache "+this);return b},f.Texture.fromCanvas=function(a){var b=new f.BaseTexture(a);return new f.Texture(b)},f.Texture.addTextureToCache=function(a,b){f.TextureCache[b]=a},f.Texture.removeTextureFromCache=function(a){var b=f.TextureCache[a];return f.TextureCache[a]=null,b},f.Texture.frameUpdates=[],f.RenderTexture=function(a,b){f.EventTarget.call(this),this.width=a||100,this.height=b||100,this.indetityMatrix=f.mat3.create(),this.frame=new f.Rectangle(0,0,this.width,this.height),f.gl?this.initWebGL():this.initCanvas()},f.RenderTexture.prototype=Object.create(f.Texture.prototype),f.RenderTexture.prototype.constructor=f.RenderTexture,f.RenderTexture.prototype.initWebGL=function(){var a=f.gl;this.glFramebuffer=a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,this.glFramebuffer),this.glFramebuffer.width=this.width,this.glFramebuffer.height=this.height,this.baseTexture=new f.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTexture=a.createTexture(),a.bindTexture(a.TEXTURE_2D,this.baseTexture._glTexture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.width,this.height,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.baseTexture.isRender=!0,a.bindFramebuffer(a.FRAMEBUFFER,this.glFramebuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.baseTexture._glTexture,0),this.projection=new f.Point(this.width/2,this.height/2),this.render=this.renderWebGL
},f.RenderTexture.prototype.resize=function(a,b){if(this.width=a,this.height=b,f.gl){this.projection.x=this.width/2,this.projection.y=this.height/2;var c=f.gl;c.bindTexture(c.TEXTURE_2D,this.baseTexture._glTexture),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,this.width,this.height,0,c.RGBA,c.UNSIGNED_BYTE,null)}else this.frame.width=this.width,this.frame.height=this.height,this.renderer.resize(this.width,this.height)},f.RenderTexture.prototype.initCanvas=function(){this.renderer=new f.CanvasRenderer(this.width,this.height,null,0),this.baseTexture=new f.BaseTexture(this.renderer.view),this.frame=new f.Rectangle(0,0,this.width,this.height),this.render=this.renderCanvas},f.RenderTexture.prototype.renderWebGL=function(a,b,c){var d=f.gl;d.colorMask(!0,!0,!0,!0),d.viewport(0,0,this.width,this.height),d.bindFramebuffer(d.FRAMEBUFFER,this.glFramebuffer),c&&(d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT));var e=a.children,g=a.worldTransform;a.worldTransform=f.mat3.create(),a.worldTransform[4]=-1,a.worldTransform[5]=2*this.projection.y,b&&(a.worldTransform[2]=b.x,a.worldTransform[5]-=b.y),f.visibleCount++,a.vcount=f.visibleCount;for(var h=0,i=e.length;i>h;h++)e[h].updateTransform();var j=a.__renderGroup;j?a==j.root?j.render(this.projection):j.renderSpecific(a,this.projection):(this.renderGroup||(this.renderGroup=new f.WebGLRenderGroup(d)),this.renderGroup.setRenderable(a),this.renderGroup.render(this.projection)),a.worldTransform=g},f.RenderTexture.prototype.renderCanvas=function(a,b,c){var d=a.children;a.worldTransform=f.mat3.create(),b&&(a.worldTransform[2]=b.x,a.worldTransform[5]=b.y);for(var e=0,g=d.length;g>e;e++)d[e].updateTransform();c&&this.renderer.context.clearRect(0,0,this.width,this.height),this.renderer.renderDisplayObject(a),this.renderer.context.setTransform(1,0,0,1,0,0)},f.AssetLoader=function(a,b){f.EventTarget.call(this),this.assetURLs=a,this.crossorigin=b,this.loadersByType={jpg:f.ImageLoader,jpeg:f.ImageLoader,png:f.ImageLoader,gif:f.ImageLoader,json:f.JsonLoader,anim:f.SpineLoader,xml:f.BitmapFontLoader,fnt:f.BitmapFontLoader}},f.AssetLoader.prototype.constructor=f.AssetLoader,f.AssetLoader.prototype.load=function(){var a=this;this.loadCount=this.assetURLs.length;for(var b=0;b<this.assetURLs.length;b++){var c=this.assetURLs[b],d=c.split(".").pop().toLowerCase(),e=this.loadersByType[d];if(!e)throw new Error(d+" is an unsupported file type");var f=new e(c,this.crossorigin);f.addEventListener("loaded",function(){a.onAssetLoaded()}),f.load()}},f.AssetLoader.prototype.onAssetLoaded=function(){this.loadCount--,this.dispatchEvent({type:"onProgress",content:this}),this.onProgress&&this.onProgress(),0==this.loadCount&&(this.dispatchEvent({type:"onComplete",content:this}),this.onComplete&&this.onComplete())},f.JsonLoader=function(a,b){f.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.loaded=!1},f.JsonLoader.prototype.constructor=f.JsonLoader,f.JsonLoader.prototype.load=function(){this.ajaxRequest=new k;var a=this;this.ajaxRequest.onreadystatechange=function(){a.onJSONLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/json"),this.ajaxRequest.send(null)},f.JsonLoader.prototype.onJSONLoaded=function(){if(4==this.ajaxRequest.readyState)if(200==this.ajaxRequest.status||-1==window.location.href.indexOf("http"))if(this.json=JSON.parse(this.ajaxRequest.responseText),this.json.frames){var a=this,b=this.baseUrl+this.json.meta.image,c=new f.ImageLoader(b,this.crossorigin),d=this.json.frames;this.texture=c.texture.baseTexture,c.addEventListener("loaded",function(){a.onLoaded()});for(var e in d){var g=d[e].frame;g&&(f.TextureCache[e]=new f.Texture(this.texture,{x:g.x,y:g.y,width:g.w,height:g.h}),d[e].trimmed&&(f.TextureCache[e].realSize=d[e].spriteSourceSize,f.TextureCache[e].trim.x=0))}c.load()}else if(this.json.bones){var h=new l.SkeletonJson,i=h.readSkeletonData(this.json);f.AnimCache[this.url]=i,this.onLoaded()}else this.onLoaded();else this.onError()},f.JsonLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},f.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},f.SpriteSheetLoader=function(a,b){f.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null,this.frames={}},f.SpriteSheetLoader.prototype.constructor=f.SpriteSheetLoader,f.SpriteSheetLoader.prototype.load=function(){var a=this,b=new f.JsonLoader(this.url,this.crossorigin);b.addEventListener("loaded",function(b){a.json=b.content.json,a.onJSONLoaded()}),b.load()},f.SpriteSheetLoader.prototype.onJSONLoaded=function(){var a=this,b=this.baseUrl+this.json.meta.image,c=new f.ImageLoader(b,this.crossorigin),d=this.json.frames;this.texture=c.texture.baseTexture,c.addEventListener("loaded",function(){a.onLoaded()});for(var e in d){var g=d[e].frame;g&&(f.TextureCache[e]=new f.Texture(this.texture,{x:g.x,y:g.y,width:g.w,height:g.h}),d[e].trimmed&&(f.TextureCache[e].realSize=d[e].spriteSourceSize,f.TextureCache[e].trim.x=0))}c.load()},f.SpriteSheetLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},f.ImageLoader=function(a,b){f.EventTarget.call(this),this.texture=f.Texture.fromImage(a,b)},f.ImageLoader.prototype.constructor=f.ImageLoader,f.ImageLoader.prototype.load=function(){if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var a=this;this.texture.baseTexture.addEventListener("loaded",function(){a.onLoaded()})}},f.ImageLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},f.BitmapFontLoader=function(a,b){f.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null},f.BitmapFontLoader.prototype.constructor=f.BitmapFontLoader,f.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new XMLHttpRequest;var a=this;this.ajaxRequest.onreadystatechange=function(){a.onXMLLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/xml"),this.ajaxRequest.send(null)},f.BitmapFontLoader.prototype.onXMLLoaded=function(){if(4==this.ajaxRequest.readyState&&(200==this.ajaxRequest.status||-1==window.location.href.indexOf("http"))){var a=this.baseUrl+this.ajaxRequest.responseXML.getElementsByTagName("page")[0].attributes.getNamedItem("file").nodeValue,b=new f.ImageLoader(a,this.crossorigin);this.texture=b.texture.baseTexture;var c={},d=this.ajaxRequest.responseXML.getElementsByTagName("info")[0],e=this.ajaxRequest.responseXML.getElementsByTagName("common")[0];c.font=d.attributes.getNamedItem("face").nodeValue,c.size=parseInt(d.attributes.getNamedItem("size").nodeValue,10),c.lineHeight=parseInt(e.attributes.getNamedItem("lineHeight").nodeValue,10),c.chars={};for(var g=this.ajaxRequest.responseXML.getElementsByTagName("char"),h=0;h<g.length;h++){var i=parseInt(g[h].attributes.getNamedItem("id").nodeValue,10),j={x:parseInt(g[h].attributes.getNamedItem("x").nodeValue,10),y:parseInt(g[h].attributes.getNamedItem("y").nodeValue,10),width:parseInt(g[h].attributes.getNamedItem("width").nodeValue,10),height:parseInt(g[h].attributes.getNamedItem("height").nodeValue,10)};f.TextureCache[i]=new f.Texture(this.texture,j),c.chars[i]={xOffset:parseInt(g[h].attributes.getNamedItem("xoffset").nodeValue,10),yOffset:parseInt(g[h].attributes.getNamedItem("yoffset").nodeValue,10),xAdvance:parseInt(g[h].attributes.getNamedItem("xadvance").nodeValue,10),kerning:{},texture:new f.Texture(this.texture,j)}}var k=this.ajaxRequest.responseXML.getElementsByTagName("kerning");for(h=0;h<k.length;h++){var l=parseInt(k[h].attributes.getNamedItem("first").nodeValue,10),m=parseInt(k[h].attributes.getNamedItem("second").nodeValue,10),n=parseInt(k[h].attributes.getNamedItem("amount").nodeValue,10);c.chars[m].kerning[l]=n}f.BitmapText.fonts[c.font]=c;var o=this;b.addEventListener("loaded",function(){o.onLoaded()}),b.load()}},f.BitmapFontLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},f.SpineLoader=function(a,b){f.EventTarget.call(this),this.url=a,this.crossorigin=b,this.loaded=!1},f.SpineLoader.prototype.constructor=f.SpineLoader,f.SpineLoader.prototype.load=function(){var a=this,b=new f.JsonLoader(this.url,this.crossorigin);b.addEventListener("loaded",function(b){a.json=b.content.json,a.onJSONLoaded()}),b.load()},f.SpineLoader.prototype.onJSONLoaded=function(){var a=new l.SkeletonJson,b=a.readSkeletonData(this.json);f.AnimCache[this.url]=b,this.onLoaded()},f.SpineLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=f),exports.PIXI=f):e.PIXI=f}.call(this);
},{}],2:[function(require,module,exports){
var PlayerModel=require("../model/PlayerModel");
var AppView=require("../view/AppView");
var AppModel=require("../model/AppModel");
var AppController=require("../controller/AppController");
var FunctionUtil=require("../utils/FunctionUtil");
var ContentScaler=require("../utils/ContentScaler");
var FrameTimer=require("../utils/FrameTimer");
var PixiApp=require("../utils/PixiApp");
var ScreenJoystick=require("../utils/ScreenJoystick");
var PIXI=require("pixi");

/**
 * The main app entry point.
 */
function App() {
	PixiApp.call(this,800,600);

	var assets=[
		"player.png",
		"tiles.png",
	];

	this.assetLoader=new PIXI.AssetLoader(assets);
	this.assetLoader.addEventListener("onComplete",
		FunctionUtil.createDelegate(this.onAssetLoaderComplete,this));

	// comment

	this.assetLoader.load();
}

FunctionUtil.extend(App,PixiApp);

App.prototype.onAssetLoaderComplete=function() {
	console.log("assets loaded");
	ScreenJoystick.getInstance().setCanvas(this.getCanvas());

	this.appModel=new AppModel();
	this.appView=new AppView();
	this.addChild(this.appView);

	this.appController=new AppController(this.appModel, this.appView);
}

module.exports=App;

},{"../controller/AppController":4,"../model/AppModel":6,"../model/PlayerModel":8,"../utils/ContentScaler":9,"../utils/FrameTimer":11,"../utils/FunctionUtil":12,"../utils/PixiApp":16,"../utils/ScreenJoystick":17,"../view/AppView":20,"pixi":1}],3:[function(require,module,exports){
var App=require("./App.js");
var app=new App();
},{"./App.js":2}],4:[function(require,module,exports){
"use strict";

var PlayerController=require("./PlayerController");
var PlayerModel=require("../model/PlayerModel");

function AppController(appModel, appView) {
	this.appModel=appModel;
	this.appView=appView;

	this.appView.showMap(this.appModel.getMapModel().getMapData());

	this.playerController=new PlayerController(
		this.appModel.getPlayerModel(),
		this.appView.getPlayerView());

	this.appModel.getPlayerModel().addEventListener(PlayerModel.MOVE,this.onPlayerMove,this);
	this.updateScroll();
}

AppController.prototype.onPlayerMove=function() {
	this.updateScroll();
}

AppController.prototype.updateScroll=function() {
	//console.log("updating scroll");
	var x=this.appModel.getPlayerModel().getX()-400;
	var y=this.appModel.getPlayerModel().getY()-300;
	var mapModel=this.appModel.getMapModel();

	if (x<0)
		x=0;

	if (y<0)
		y=0;

	if (x>mapModel.getWidth()-800)
		x=mapModel.getWidth()-800;

	if (y>mapModel.getHeight()-600)
		y=mapModel.getHeight()-600;

	this.appView.setScroll(x,y);
}

module.exports=AppController;
},{"../model/PlayerModel":8,"./PlayerController":5}],5:[function(require,module,exports){
var Keyboard=require("../utils/Keyboard");
var FunctionUtil=require("../utils/FunctionUtil");
var FrameTimer=require("../utils/FrameTimer");
var ScreenJoystick=require("../utils/ScreenJoystick");

/**
 * Player controller.
 */
function PlayerController(playerModel, playerView) {
	this.playerModel=playerModel;
	this.playerView=playerView;

	/*console.log("m: "+this.playerModel);
	console.log("v: "+this.playerView);*/

	FrameTimer.getInstance().addEventListener(FrameTimer.TIMER,this.onTimer,this);
	Keyboard.getInstance().addEventListener(Keyboard.KEY_DOWN,this.onKeyDown,this);
	ScreenJoystick.getInstance().addEventListener(ScreenJoystick.BUTTON_DOWN,this.onJoystickButtonDown,this);

	this.updateViewFromModel();
}

/**
 * Key down.
 */
PlayerController.prototype.onKeyDown=function(ev) {
	if (ev.keyCode==Keyboard.UP)
		this.playerModel.jump();
}

/**
 * Key down.
 */
PlayerController.prototype.onJoystickButtonDown=function(ev) {
	if (ev.button==ScreenJoystick.UP)
		this.playerModel.jump();
}

/**
 * Timer.
 */
PlayerController.prototype.onTimer=function() {
	var joystickX=
		Keyboard.getInstance().getJoystickX()+
		ScreenJoystick.getInstance().getJoystickX();

	this.playerModel.updateDeltaX(joystickX);

	var power=
		Keyboard.getInstance().isKeyDown(Keyboard.UP) ||
		ScreenJoystick.getInstance().isButtonDown(ScreenJoystick.UP);

	this.playerModel.updateDeltaY(power);

	this.playerModel.simulateStep();

	this.updateViewFromModel();
}

/**
 * Update view from model.
 */
PlayerController.prototype.updateViewFromModel=function() {
	this.playerView.position.x=this.playerModel.getX();
	this.playerView.position.y=this.playerModel.getY();

	this.playerView.showForward(this.playerModel.getForward());

	if (this.playerModel.isJumping())
		this.playerView.showJumping(true);

	else
		this.playerView.showAnimationFrame(this.playerModel.getAnimationFrame());
}

module.exports=PlayerController;
},{"../utils/FrameTimer":11,"../utils/FunctionUtil":12,"../utils/Keyboard":14,"../utils/ScreenJoystick":17}],6:[function(require,module,exports){
"use strict";

var PlayerModel=require("./PlayerModel");
var MapModel=require("./MapModel");

/**
 * App model.
 */
function AppModel() {
	this.mapModel=new MapModel();
	this.playerModel=new PlayerModel();
	this.playerModel.setMapModel(this.mapModel);
}

/**
 * Get player model.
 */
AppModel.prototype.getPlayerModel=function() {
	return this.playerModel;
}

/**
 * Get map.
 */
AppModel.prototype.getMapModel=function() {
	return this.mapModel;
}

module.exports=AppModel;
},{"./MapModel":7,"./PlayerModel":8}],7:[function(require,module,exports){
"use strict";

/**
 * Map model.
 */
function MapModel() {
	this.mapData=[
		"########################################",
		"#                                      #",
		"#       **                             #",
		"#       ==             __*__*____      #",
		"#                      ==========      #",
		"#__           _*              #        #",
		"#==    *      ==              #      ###",
		"###   _=                      #        #",
		"##   _=#_                     #        #",
		"#    =##=                     ###      #",
		"#      ##                     #        #",
		"#             _*              #      ###",
		"#          ___==_       #######        #",
		"#___*__  __===##=_______##             #",
		"#======  ==######=======##     ___*__*_#",
		"######      ##############     ========#",
		"#            #######             #######",
		"#       **      ####               #####",
		"#     ====                    ___    ###",
		"#                             ===      #",
		"#             _*                       #",
		"#      *      ==       _*__            #",
		"#______=               ====            #",
		"#======#_                    _*_       #",
		"#   ####=                    ===       #",
		"#   #####                           ___#",
		"#             _*                    ===#",
		"#          ___==_                      #",
		"#___*______===##=_____*______**________#",
		"#==========######======================#"
	];

	this.collisionTokens="#=";

	this.width=this.mapData[0].length*40;
	this.height=this.mapData.length*40;
}

/**
 * Get map.
 */
MapModel.prototype.getMapData=function() {
	return this.mapData;
}

/**
 * Get width.
 */
MapModel.prototype.getWidth=function() {
	return this.width;
}

/**
 * Get height.
 */
MapModel.prototype.getHeight=function() {
	return this.height;
}

/**
 * Check hit.
 */
MapModel.prototype.checkCollision=function(x, y) {
	//console.log("check: x: "+x+" y: "+y);

	var token=this.mapData[Math.floor(y/40)].charAt(Math.floor(x/40));

	if (this.collisionTokens.indexOf(token)>=0)
		return true;

	return false;
}

module.exports=MapModel;
},{}],8:[function(require,module,exports){
NumberUtil=require("../utils/NumberUtil");
FunctionUtil=require("../utils/FunctionUtil");
EventDispatcher=require("../utils/EventDispatcher");

/**
 * Player model.
 */
function PlayerModel() {
	EventDispatcher.call(this);

	this.x=80;
	this.y=80;

	this.deltaX=0;
	this.deltaY=0;

	this.forward=true;

	this.animationFrame=0;

	this.jumping=false;
}

FunctionUtil.extend(PlayerModel,EventDispatcher);

//PlayerModel.HORIZONTAL_ACCELERATION=1;
PlayerModel.HORIZONTAL_ACCELERATION=.75;
PlayerModel.MAX_HORIZONTAL_SPEED=5;
PlayerModel.MAX_VERTICAL_SPEED=10;
PlayerModel.JUMP_ACCELERATION=9;
PlayerModel.GRAVITY=1;
PlayerModel.POWER_JUMP_GRAVITY=.25;

PlayerModel.MOVE="move";

/**
 * Update delta X.
 */
PlayerModel.prototype.updateDeltaX=function(direction) {
	if (direction) {
		if (direction>0)
			this.forward=true;

		if (direction<0)
			this.forward=false;

		this.deltaX+=direction*PlayerModel.HORIZONTAL_ACCELERATION;

		this.animationFrame++;
	}

	else
		this.deltaX=NumberUtil.easeIn(this.deltaX,0,PlayerModel.HORIZONTAL_ACCELERATION);

	if (this.deltaX>PlayerModel.MAX_HORIZONTAL_SPEED)
		this.deltaX=PlayerModel.MAX_HORIZONTAL_SPEED;

	if (this.deltaX<-PlayerModel.MAX_HORIZONTAL_SPEED)
		this.deltaX=-PlayerModel.MAX_HORIZONTAL_SPEED;
}

/**
 * Update delta y.
 */
PlayerModel.prototype.updateDeltaY=function(powerJump) {
	if (powerJump && this.deltaY<0)
//	if (powerJump)
		this.deltaY+=PlayerModel.POWER_JUMP_GRAVITY;

	else
		this.deltaY+=PlayerModel.GRAVITY;

	if (this.deltaY>PlayerModel.MAX_VERTICAL_SPEED)
		this.deltaY=PlayerModel.MAX_VERTICAL_SPEED;
}

/**
 * Jump.
 */
PlayerModel.prototype.jump=function() {
	if (this.jumping || this.deltaY>0)
		return;

	this.jumping=true;
	this.deltaY=-PlayerModel.JUMP_ACCELERATION;
}

/**
 * Update delta X.
 */
PlayerModel.prototype.simulateStep=function() {
	var oldx=this.x;
	this.x+=this.deltaX;

	if (this.checkCollision()) {
		this.x=oldx;

		if (this.deltaX<0)
			this.findSpot(-1,0);

		else if (this.deltaX>0)
			this.findSpot(1,0);

		this.deltaX=0;
	}

	var oldy=this.y;
	this.y+=this.deltaY;

	if (this.checkCollision()) {
		this.y=oldy;

		if (this.deltaY>=0) {
			this.jumping=false;
			this.findSpot(0,1);
		}

		else if (this.deltaY<0)
			this.findSpot(0,-1);

		this.deltaY=0;
	}

	this.dispatchEvent(PlayerModel.MOVE);
}

/**
 * Get X.
 */
PlayerModel.prototype.isJumping=function() {
	return this.jumping;
}

/**
 * Get X.
 */
PlayerModel.prototype.getX=function() {
	return this.x;
}

/**
 * Get Y.
 */
PlayerModel.prototype.getY=function() {
	return this.y;
}

/**
 * Facing forward (right)?
 */
PlayerModel.prototype.getForward=function() {
	return this.forward;
}

/**
 * Are we on the ground?
 */
/*PlayerModel.prototype.isOnGround=function() {
	return this.y>=475;
}*/

/**
 * Get animation frame.
 */
PlayerModel.prototype.getAnimationFrame=function() {
	return this.animationFrame;
}

/**
 * Find empty spot.
 */
PlayerModel.prototype.findSpot=function(dx, dy) {
	if (this.checkCollision())
		throw new Error("Needs to be in the open");

	this.x=Math.floor(this.x);
	this.y=Math.floor(this.y);

	while (1) {
		var oldx=this.x;
		var oldy=this.y;

		this.x+=dx;
		this.y+=dy;

		if (this.checkCollision()) {
			this.x=oldx;
			this.y=oldy;
			return;
		}
	}
}

/**
 * Check collision.
 */
PlayerModel.prototype.checkCollision=function() {
	var collisionPoints=[
		{x: -30, y: 2},
		{x: 0, y: 2},
		{x: 30, y: 2},

		{x: -30, y: 40},
		{x: 30, y: 40},

		{x: -30, y: 78},
		{x: 0, y: 78},
		{x: 30, y: 78}
	];

	for (var i in collisionPoints) {
		var p=collisionPoints[i];

		if (this.mapModel.checkCollision(this.x+p.x,this.y+p.y))
			return true;
	}

	return false;
}


/**
 * Set map model reference.
 */
PlayerModel.prototype.setMapModel=function(mapModel) {
	this.mapModel=mapModel;
}

module.exports=PlayerModel;
},{"../utils/EventDispatcher":10,"../utils/FunctionUtil":12,"../utils/NumberUtil":15}],9:[function(require,module,exports){
var PIXI=require("pixi");
var FunctionUtil=require("../utils/FunctionUtil");

function ContentScaler(content) {
	PIXI.DisplayObjectContainer.call(this);

	this.contentWidth=100;
	this.contentHeight=100;

	this.screenWidth=100;
	this.screenHeight=100;

	this.theMask=null;

	if (content)
		this.setContent(content);
}

FunctionUtil.extend(ContentScaler,PIXI.DisplayObjectContainer);

ContentScaler.prototype.setContent=function(content) {
	this.content=content;

	this.addChild(this.content);

	if (this.theMask) {
		this.removeChild(this.theMask);
		this.theMask=null;
	}

	this.theMask=new PIXI.Graphics();
	this.addChild(this.theMask);

	this.updateScale();
}

ContentScaler.prototype.setContentSize=function(contentWidth, contentHeight) {
	this.contentWidth=contentWidth;
	this.contentHeight=contentHeight;

	this.updateScale();
}

ContentScaler.prototype.setScreenSize=function(screenWidth, screenHeight) {
	this.screenWidth=screenWidth;
	this.screenHeight=screenHeight;

	this.updateScale();
}

ContentScaler.prototype.updateScale=function() {
	var scale;

	if (this.screenWidth/this.contentWidth<this.screenHeight/this.contentHeight)
		scale=this.screenWidth/this.contentWidth;

	else
		scale=this.screenHeight/this.contentHeight;

	this.content.scale.x=scale;
	this.content.scale.y=scale;

	var scaledWidth=this.contentWidth*scale;
	var scaledHeight=this.contentHeight*scale;

	this.content.position.x=(this.screenWidth-scaledWidth)/2;
	this.content.position.y=(this.screenHeight-scaledHeight)/2;

	var r=new PIXI.Rectangle(this.content.position.x,this.content.position.y,scaledWidth,scaledHeight);
	var right=r.x+r.width;
	var bottom=r.y+r.height;

	this.theMask.clear();
	this.theMask.beginFill();
	this.theMask.drawRect(0,0,this.screenWidth,r.y);
	this.theMask.drawRect(0,0,r.x,this.screenHeight);
	this.theMask.drawRect(right,0,this.screenWidth-right,this.screenHeight);
	this.theMask.drawRect(0,bottom,this.screenWidth,this.screenHeight-bottom);
	this.theMask.endFill();
}

module.exports=ContentScaler;
},{"../utils/FunctionUtil":12,"pixi":1}],10:[function(require,module,exports){
"use strict";

/**
 * AS3 style event dispatcher.
 */
function EventDispatcher() {
	this.listenerMap={};
}

/**
 * Add event listener.
 */
EventDispatcher.prototype.addEventListener=function(eventType, listener, scope) {
	if (!eventType)
		throw new Error("Event type required for event dispatcher");

	if (!listener)
		throw new Error("Listener required for event dispatcher");

	this.removeEventListener(eventType,listener,scope);

	if (!this.listenerMap.hasOwnProperty(eventType))
		this.listenerMap[eventType]=[];

	this.listenerMap[eventType].push({
		listener: listener,
		scope: scope
	});
}

/**
 * Remove event listener.
 */
EventDispatcher.prototype.removeEventListener=function(eventType, listener, scope) {
	if (!this.listenerMap.hasOwnProperty(eventType))
		return;

	var listeners=this.listenerMap[eventType];

	for (var i=0; i<listeners.length; i++) {
		var listenerObj=listeners[i];

		if (listener==listenerObj.listener && scope==listenerObj.scope) {
			listeners.splice(i,1);
			i--;
		}
	}
}

/**
 * Dispatch event.
 */
EventDispatcher.prototype.dispatchEvent=function(event) {
	if (typeof event=="string") {
		event={
			type: event
		};
	}

	if (!this.listenerMap.hasOwnProperty(event.type))
		return;

	for (var i in this.listenerMap[event.type]) {
		var listenerObj=this.listenerMap[event.type][i];

		listenerObj.listener.call(listenerObj.scope,event);
	}
}

module.exports=EventDispatcher;
},{}],11:[function(require,module,exports){
"use strict";

var EventDispatcher=require("./EventDispatcher");
var FunctionUtil=require("./FunctionUtil");

/**
 * Frame timer.
 */
function FrameTimer() {
	EventDispatcher.call(this);

	this.intervalId=setInterval(FunctionUtil.createDelegate(this.onInterval,this),1000/60);
}

FunctionUtil.extend(FrameTimer,EventDispatcher);

FrameTimer.TIMER="timer";
FrameTimer.RENDER="render";

/**
 * On interval.
 */
FrameTimer.prototype.onInterval=function() {
	this.dispatchEvent(FrameTimer.TIMER);
	this.dispatchEvent(FrameTimer.RENDER);
}

/**
 * Get singleton instance.
 */
FrameTimer.getInstance=function() {
	if (!FrameTimer.instance)
		FrameTimer.instance=new FrameTimer();

	return FrameTimer.instance;
}

module.exports=FrameTimer;
},{"./EventDispatcher":10,"./FunctionUtil":12}],12:[function(require,module,exports){
/**
 * Function utils.
 */
function FunctionUtil() {
}

/**
 * Extend a class.
 * Don't forget to call super.
 */
FunctionUtil.extend=function(target, base) {
	target.prototype=Object.create(base.prototype);
	target.prototype.constructor=target;
}

/**
 * Create delegate function.
 */
FunctionUtil.createDelegate=function(func, scope) {
	return function() {
		func.apply(scope,arguments);
	};
}

module.exports=FunctionUtil;

},{}],13:[function(require,module,exports){
var FunctionUtil=require("./FunctionUtil");
var PIXI=require("pixi");

/**
 * Grid part.
 */
function GridPart(texture, gridWidth, gridHeight) {
	if (!texture.baseTexture.hasLoaded)
		throw new Error("can't create grid part from unloaded texture");

	PIXI.Texture.call(this,texture);

	this.gridWidth=gridWidth;
	this.gridHeight=gridHeight;

	this.setPart(0,0);
}

FunctionUtil.extend(GridPart,PIXI.Texture);

/**
 * Part to use.
 */
GridPart.prototype.setPart=function(col, row) {
	this.setFrame({
		x: this.gridWidth*col,
		y: this.gridHeight*row,
		width: this.gridWidth,
		height: this.gridHeight
	});
}

module.exports=GridPart;

},{"./FunctionUtil":12,"pixi":1}],14:[function(require,module,exports){
"use strict";

var EventDispatcher=require("./EventDispatcher");
var FunctionUtil=require("./FunctionUtil");

/**
 * Keyboard listener.
 */
function Keyboard() {
	EventDispatcher.call(this);

	document.onkeydown=FunctionUtil.createDelegate(this.onKeyDown,this);
	document.onkeyup=FunctionUtil.createDelegate(this.onKeyUp,this);

	this.currentlyPressed=[];
}

FunctionUtil.extend(Keyboard,EventDispatcher);

Keyboard.KEY_DOWN="keydown";
Keyboard.KEY_UP="keyup";

Keyboard.LEFT=37;
Keyboard.UP=38;
Keyboard.RIGHT=39;
Keyboard.DOWN=40;

/**
 * Key down.
 */
Keyboard.prototype.onKeyDown=function(ev) {
	var index=this.currentlyPressed.indexOf(ev.keyCode);

	if (index>=0)
		return;

	this.currentlyPressed.push(ev.keyCode);

	this.dispatchEvent(ev);
}

/**
 * Key up.
 */
Keyboard.prototype.onKeyUp=function(ev) {
	var index=this.currentlyPressed.indexOf(ev.keyCode);

	if (index>=0)
		this.currentlyPressed.splice(index,1);

	this.dispatchEvent(ev);
}

/**
 * Is key down?
 */
Keyboard.prototype.isKeyDown=function(keyCode) {
	return this.currentlyPressed.indexOf(keyCode)>=0;
}

/**
 * Joystick X.
 */
Keyboard.prototype.getJoystickX=function() {
	var r=0;

	if (this.isKeyDown(Keyboard.RIGHT))
		r++;

	if (this.isKeyDown(Keyboard.LEFT))
		r--;

	return r;
}

/**
 * Joystick Y.
 */
Keyboard.prototype.getJoystickY=function() {
	var r=0;

	if (this.isKeyDown(Keyboard.DOWN))
		r++;

	if (this.isKeyDown(Keyboard.UP))
		r--;

	return r;
}

/**
 * Get instance.
 */
Keyboard.getInstance=function() {
	if (!Keyboard.instance)
		Keyboard.instance=new Keyboard();

	return Keyboard.instance;
}

module.exports=Keyboard;
},{"./EventDispatcher":10,"./FunctionUtil":12}],15:[function(require,module,exports){
/**
 * Number util.
 */
function NumberUtil() {
}

/**
 * Ease in.
 */
NumberUtil.easeIn=function(current, target, delta) {
	if (Math.abs(target-current)<delta)
		return target;

	if (current>target)
		return current-delta;

	if (current<target)
		return current+delta;
}

module.exports=NumberUtil;
},{}],16:[function(require,module,exports){
"use strict";

var PIXI=require("pixi");
var FunctionUtil=require("./FunctionUtil");
var ContentScaler=require("./ContentScaler");
var FrameTimer=require("./FrameTimer");

/**
 * Pixi full window app.
 * Can operate using window coordinates or scaled to specific area.
 */
function PixiApp(width, height) {
	if (PixiApp.instance)
		throw new Error("Only one PixiApp per app");

	PixiApp.instance=this;

	PIXI.DisplayObjectContainer.call(this);

	var view;

	if (navigator.isCocoonJS)
		view=document.createElement('screencanvas');

	else
		view=document.createElement('canvas');

//	this.renderer=new PIXI.WebGLRenderer(window.innerWidth,window.innerHeight,view);
	this.renderer=new PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight,view);
	document.body.appendChild(this.renderer.view);

	document.body.style.margin=0;
	document.body.style.padding=0;

	document.body.onresize=FunctionUtil.createDelegate(this.onWindowResize,this);
	window.onresize=FunctionUtil.createDelegate(this.onWindowResize,this);

/*	var s=document.createElement("div");
	s.innerHTML="hello";
	s.style.background="#ffffff";
	s.style.position="absolute";
	s.style.left="0";
	s.style.top="30px";

	document.body.appendChild(s);*/

	this.contentScaler=null;

	this.appStage=new PIXI.Stage(0,true);

	//console.log("im: "+this.appStage.interactionManager);

	if (!width || !height)
		this.useNoScaling();

	else
		this.useScaling(width,height);

	FrameTimer.getInstance().addEventListener(FrameTimer.RENDER,this.onAnimationFrame,this);
}

FunctionUtil.extend(PixiApp,PIXI.DisplayObjectContainer);

/**
 * Use scaling mode.
 */
PixiApp.prototype.useScaling=function(w, h) {
	this.removeContent();

	this.contentScaler=new ContentScaler(this);
	this.contentScaler.setContentSize(w,h);
	this.contentScaler.setScreenSize(window.innerWidth,window.innerHeight);
	this.appStage.addChild(this.contentScaler);
}

/**
 * Use no scaling mode.
 */
PixiApp.prototype.useNoScaling=function() {
	this.removeContent();

	this.appStage.addChild(this);
}

/**
 * Remove any content.
 * Internal.
 */
PixiApp.prototype.removeContent=function() {
	if (this.appStage.children.indexOf(this)>=0)
		this.appStage.removeChild(this);

	if (this.contentScaler) {
		this.appStage.removeChild(this.contentScaler)
		this.contentScaler=null;
	}
}

/**
 * Window resize.
 */
PixiApp.prototype.onWindowResize=function() {
	if (this.contentScaler)
		this.contentScaler.setScreenSize(window.innerWidth,window.innerHeight);

	this.renderer.resize(window.innerWidth,window.innerHeight);

	this.renderer.render(this.appStage);
}

/**
 * Animation frame.
 */
PixiApp.prototype.onAnimationFrame=function() {
	this.renderer.render(this.appStage);
}

/**
 * Get canvas.
 */
PixiApp.prototype.getCanvas=function() {
	return this.renderer.view;
}

/**
 * Get stage.
 */
PixiApp.prototype.getStage=function() {
	return this.appStage;
}

module.exports=PixiApp;
},{"./ContentScaler":9,"./FrameTimer":11,"./FunctionUtil":12,"pixi":1}],17:[function(require,module,exports){
var PIXI=require("pixi");
var FunctionUtil=require("../utils/FunctionUtil");
var EventDispatcher=require("../utils/EventDispatcher");

/**
 * The main app entry point.
 */
function ScreenJoystick(width, height) {
	EventDispatcher.call(this);

	this.displayObject=new PIXI.DisplayObjectContainer();

	if (!ScreenJoystick.isTouchDevice())
		this.displayObject.visible=false;

	this.makeButtons();

	this.currentlyPressed=[];
}

FunctionUtil.extend(ScreenJoystick,EventDispatcher);

ScreenJoystick.LEFT="left";
ScreenJoystick.RIGHT="right";
ScreenJoystick.UP="up";
ScreenJoystick.DOWN="down";
ScreenJoystick.FIRE="fire";

ScreenJoystick.BUTTON_DOWN="buttonDown";
ScreenJoystick.BUTTON_UP="buttonUp";

ScreenJoystick.prototype.makeButtons=function() {
	this.buttons=[];

	this.makeButton(ScreenJoystick.LEFT,20,600-80, [0,30,40,0,40,60], [-20,-20,50,80]);
	this.makeButton(ScreenJoystick.RIGHT,80,600-80, [0,0,40,30,0,60], [-10,-20,60,80]);
	this.makeButton(ScreenJoystick.UP,800-80,600-70, [0,40,30,0,60,40], [-20,-20,80,70]);
}

ScreenJoystick.prototype.setCanvas=function(canvas) {
	var delegate=FunctionUtil.createDelegate(this.handleTouchEvent,this);

	canvas.addEventListener("touchstart",delegate);
	canvas.addEventListener("touchend",delegate);
	canvas.addEventListener("touchmove",delegate);
}

ScreenJoystick.prototype.handleTouchEvent=function(ev) {
	var before=this.currentlyPressed;

	this.currentlyPressed=[];

	for (var i=0; i<ev.touches.length; i++) {
		touch=ev.touches[i];

		for (var j=0; j<this.buttons.length; j++) {
			var button=this.buttons[j];

			var p=ScreenJoystick.globalToLocal(button,touch.pageX,touch.pageY);

			if (button.hitArea.contains(p.x,p.y)) {
				if (this.currentlyPressed.indexOf(button.id)<0)
					this.currentlyPressed.push(button.id);
			}
		}
	}

	for (var i=0; i<this.currentlyPressed.length; i++) {
		var cand=this.currentlyPressed[i];

		if (before.indexOf(cand)<0)
			this.dispatchEvent({
				type: ScreenJoystick.BUTTON_DOWN,
				button: cand
			});			
	}

	for (var i=0; i<before.length; i++) {
		var cand=before[i];

		if (this.currentlyPressed.indexOf(cand)<0)
			this.dispatchEvent({
				type: ScreenJoystick.BUTTON_UP,
				button: cand
			});			
	}

	//console.log(this.currentlyPressed);
}

ScreenJoystick.prototype.makeButton=function(id, x, y, coords, r) {
	var g=new PIXI.Graphics();

	g.alpha=.75;

	g.hitArea=new PIXI.Rectangle(r[0],r[1],r[2]-r[0],r[3]-r[1]);

	/*g.beginFill(0xff0000);
	g.drawRect(r[0],r[1],r[2]-r[0],r[3]-r[1]);
	g.endFill();*/

	g.beginFill(0xffffff);
	g.moveTo(coords[0],coords[1]);

	var maxX=0;
	var maxY=0;
	for (var i=2; i<coords.length; i+=2) {
		g.lineTo(coords[i],coords[i+1]);

		if (coords[i]>maxX)
			maxX=coords[i];

		if (coords[i+1]>maxY)
			maxY=coords[i+1];
	}

	g.endFill();

	this.displayObject.addChild(g);

	g.position.x=x;
	g.position.y=y;

	g.id=id;

	this.buttons.push(g);
}

ScreenJoystick.prototype.handleButtonDown=function(button) {
	if (this.currentlyPressed.indexOf(button)<0)
		this.currentlyPressed.push(button);

	this.dispatchEvent({
		type: ScreenJoystick.BUTTON_DOWN,
		button: button
	});
}

ScreenJoystick.prototype.handleButtonUp=function(button) {
	var index=this.currentlyPressed.indexOf(button);

	if (index>=0)
		this.currentlyPressed.splice(index,1);

	this.dispatchEvent({
		type: ScreenJoystick.BUTTON_UP,
		button: button
	});
}

ScreenJoystick.prototype.getDisplayObject=function() {
	return this.displayObject;
}

ScreenJoystick.prototype.isButtonDown=function(button) {
	return this.currentlyPressed.indexOf(button)>=0;
}

/**
 * Joystick X.
 */
ScreenJoystick.prototype.getJoystickX=function() {
	var r=0;

	if (this.isButtonDown(ScreenJoystick.RIGHT))
		r++;

	if (this.isButtonDown(ScreenJoystick.LEFT))
		r--;

	return r;
}

ScreenJoystick.getInstance=function() {
	if (!ScreenJoystick.instance)
		ScreenJoystick.instance=new ScreenJoystick(800,600);

	return ScreenJoystick.instance;
}

ScreenJoystick.globalToLocal=function(displayObject, pageX, pageY) {
	var worldTransform = displayObject.worldTransform;
	
	// do a cheeky transform to get the mouse coords;
	var a00 = worldTransform[0], a01 = worldTransform[1], a02 = worldTransform[2],
        a10 = worldTransform[3], a11 = worldTransform[4], a12 = worldTransform[5],
        id = 1 / (a00 * a11 + a01 * -a10);
	// set the mouse coords...
	return new PIXI.Point(a11 * id * pageX + -a01 * id * pageY + (a12 * a01 - a02 * a11) * id,
							   a00 * id * pageY + -a10 * id * pageX + (-a12 * a00 + a02 * a10) * id)
}

ScreenJoystick.isTouchDevice=function() {
	return !!('ontouchstart' in window);
}

module.exports=ScreenJoystick;

},{"../utils/EventDispatcher":10,"../utils/FunctionUtil":12,"pixi":1}],18:[function(require,module,exports){
"use strict";

var PIXI=require("pixi");
var FunctionUtil=require("./FunctionUtil");
var TileMapUtil=require("./TileMapUtil");
var GridPart=require("./GridPart");

/**
 * Tile map.
 */
function TileMap(sheet, gridWidth, gridHeight) {
	this.sheet=TileMapUtil.fixTileTexture(sheet,gridWidth,gridHeight);
	this.gridWidth=gridWidth;
	this.gridHeight=gridHeight;

	PIXI.DisplayObjectContainer.call(this);

	this.sprites=[];
	this.tokenMap={};
}

FunctionUtil.extend(TileMap,PIXI.DisplayObjectContainer);

/**
 * Set tile tokens.
 */
TileMap.prototype.setTileTokens=function(tokenRows) {
	this.tokenMap={};

	for (var rowIndex=0; rowIndex<tokenRows.length; rowIndex++) {
		var row=tokenRows[rowIndex];

		for (var colIndex=0; colIndex<row.length; colIndex++) {
			var token=row.charAt(colIndex);

			this.tokenMap[token]={
				row: rowIndex,
				col: colIndex
			};
		}
	}
}

/**
 * Create sprite for token.
 */
TileMap.prototype.createSpriteForToken=function(token) {
	if (!this.tokenMap.hasOwnProperty(token))
		throw new Error("Unknown token: "+token);

	var o=this.tokenMap[token];

	var t=new PIXI.Texture(this.sheet);
	t.setFrame(new PIXI.Rectangle(
		1+o.col*(this.gridWidth+2),
		1+o.row*(this.gridHeight+2),
		this.gridWidth,
		this.gridHeight));

/*	var part=new GridPart(this.sheet,this.gridHeight,this.gridWidth);
	part.setPart(o.col,o.row);*/

	var s=new PIXI.Sprite(t);

	s.width=this.gridWidth;
	s.height=this.gridHeight;

	return s;
}

/**
 * Set map.
 */
TileMap.prototype.setMap=function(map) {
	for (var i=0; i<this.sprites.length; i++)
		this.removeChild(this.sprites[i]);

	this.sprites=[];

	for (var rowIndex=0; rowIndex<map.length; rowIndex++) {
		var row=map[rowIndex];

		for (var colIndex=0; colIndex<row.length; colIndex++) {
			var token=row.charAt(colIndex);
			var s=this.createSpriteForToken(token);

			s.position.x=colIndex*this.gridWidth;
			s.position.y=rowIndex*this.gridHeight;

			this.addChild(s);
		}
	}
}

module.exports=TileMap;
},{"./FunctionUtil":12,"./GridPart":13,"./TileMapUtil":19,"pixi":1}],19:[function(require,module,exports){
"use strict";

var PIXI=require("pixi");

function TileMapUtil() {
}

TileMapUtil.fixTileTexture=function(tileAtlas, tileWidth, tileHeight) {
	if (!tileAtlas.baseTexture.hasLoaded)
		throw new Error("texture needs to be loaded");

	var cols=Math.floor(tileAtlas.width/tileWidth);
	var rows=Math.floor(tileAtlas.height/tileHeight);

	var texture=new PIXI.Texture(tileAtlas);
	var d=new PIXI.DisplayObjectContainer();

	for (var y=0; y<rows; y++)
		for (var x=0; x<cols; x++) {
			var s=TileMapUtil.getTileTexturePart(texture,tileWidth,tileHeight,x,y);
			d.addChild(s);
		}

	var texture=new PIXI.RenderTexture(cols*(tileWidth+2),rows*(tileHeight+2));
	texture.render(d);

	return texture;
}

TileMapUtil.getTileTexturePart=function(baseTexture, tileWidth, tileHeight, col, row) {
	var container=new PIXI.DisplayObjectContainer();

	// Center
	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col,tileHeight*row,tileWidth,tileHeight);
	s.position.x=1;
	s.position.y=1;
	container.addChild(s);

	// Edges
	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col,tileHeight*row,1,tileHeight);
	s.position.x=0;
	s.position.y=1;
	container.addChild(s);

	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col,tileHeight*row,tileWidth,1);
	s.position.x=1;
	s.position.y=0;
	container.addChild(s);

	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col+tileWidth-1,tileHeight*row,1,tileHeight);
	s.position.x=tileWidth+1;
	s.position.y=1;
	container.addChild(s);

	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col,tileHeight*row+tileHeight-1,tileHeight,1);
	s.position.x=1;
	s.position.y=tileHeight+1;
	container.addChild(s);

	// Corners
	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col,tileHeight*row,1,1);
	s.position.x=0;
	s.position.y=0;
	container.addChild(s);

	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col+tileWidth-1,tileHeight*row,1,1);
	s.position.x=tileWidth+1;
	s.position.y=0;
	container.addChild(s);

	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col,tileHeight*row+tileHeight-1,1,1);
	s.position.x=0;
	s.position.y=tileHeight+1;
	container.addChild(s);

	var s=TileMapUtil.getTexturePartSprite(baseTexture,tileWidth*col+tileWidth-1,tileHeight*row+tileHeight-1,1,1);
	s.position.x=tileWidth+1;
	s.position.y=tileHeight+1;
	container.addChild(s);

	container.position.x=(tileWidth+2)*col;
	container.position.y=(tileHeight+2)*row;

	return container;
}

TileMapUtil.getTexturePartSprite=function(baseTexture, x, y, w, h) {
	var texture=new PIXI.Texture(baseTexture);
	texture.setFrame(new PIXI.Rectangle(x,y,w,h));

	return new PIXI.Sprite(texture);
}

module.exports=TileMapUtil;
},{"pixi":1}],20:[function(require,module,exports){
var PlayerView=require("./PlayerView");
var PIXI=require("pixi");
var FunctionUtil=require("../utils/FunctionUtil");
var TileMap=require("../utils/TileMap");
var ScreenJoystick=require("../utils/ScreenJoystick");

/**
 * The main app entry point.
 */
function AppView() {
	PIXI.DisplayObjectContainer.call(this);

	this.gameContainer=new PIXI.DisplayObjectContainer();
	this.gameContainer.position.x=-100;
	this.addChild(this.gameContainer);

	var t=PIXI.Texture.fromImage("tiles.png");
	this.tileMap=new TileMap(t,40,40);
	this.tileMap.setTileTokens([
			"#_*",
			" ="
		]);
	this.gameContainer.addChild(this.tileMap);

	this.playerView=new PlayerView();
	this.gameContainer.addChild(this.playerView);

	this.addChild(ScreenJoystick.getInstance().getDisplayObject());
}

FunctionUtil.extend(AppView,PIXI.DisplayObjectContainer);

/**
 * Get player view.
 */
AppView.prototype.getPlayerView=function() {
	return this.playerView;
}

/**
 * Set map.
 */
AppView.prototype.showMap=function(mapData) {
	this.tileMap.setMap(mapData);
}

/**
 * Set map.
 */
AppView.prototype.setScroll=function(x, y) {
	this.gameContainer.position.x=-x;
	this.gameContainer.position.y=-y;
}

module.exports=AppView;

},{"../utils/FunctionUtil":12,"../utils/ScreenJoystick":17,"../utils/TileMap":18,"./PlayerView":21,"pixi":1}],21:[function(require,module,exports){
var PlayerModel=require("../model/PlayerModel");
var FunctionUtil=require("../utils/FunctionUtil");
var GridPart=require("../utils/GridPart");
var PIXI=require("pixi");

/**
 * The player.
 */
function PlayerView() {
	PIXI.DisplayObjectContainer.call(this);

	this.sourceTexture=PIXI.Texture.fromImage("player.png");
	this.gridPart=new GridPart(this.sourceTexture,80,80);
	this.gridPart.setPart(0,0);

	this.playerSprite=new PIXI.Sprite(this.gridPart);
	this.addChild(this.playerSprite);

	this.showForward(true);
	this.showAnimationFrame(0);
}

FunctionUtil.extend(PlayerView,PIXI.DisplayObjectContainer);

/**
 * Set direction.
 */
PlayerView.prototype.showForward=function(forward) {
	if (forward) {
		this.playerSprite.position.x=-40;
		this.playerSprite.scale.x=1;
	}

	else {
		this.playerSprite.position.x=40;
		this.playerSprite.scale.x=-1;
	}
}

/**
 * Show an animation frame.
 */
PlayerView.prototype.showAnimationFrame=function(frame) {
	var frames=[0,1,2,1];
	var index=Math.floor(frame/10)%frames.length;

	this.gridPart.setPart(frames[index],0);
}

/**
 * Show jumping.
 */
PlayerView.prototype.showJumping=function(frame) {
	this.gridPart.setPart(0,1);
}

module.exports=PlayerView;

},{"../model/PlayerModel":8,"../utils/FunctionUtil":12,"../utils/GridPart":13,"pixi":1}]},{},[3])
;