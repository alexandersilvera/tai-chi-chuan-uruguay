import { ElementNode, $applyNodeReplacement } from 'lexical';

export class ImageNode extends ElementNode {
  __src;
  __alt;

  static getType() {
    return 'image';
  }

  static clone(node) {
    return new ImageNode(node.__src, node.__alt, node.__key);
  }

  constructor(src, alt, key) {
    super(key);
    this.__src = src;
    this.__alt = alt;
  }

  createDOM(config) {
    const img = document.createElement('img');
    img.setAttribute('src', this.__src);
    img.setAttribute('alt', this.__alt);
    img.style.maxWidth = '100%';
    return img;
  }

  updateDOM(prevNode, dom, config) {
    const img = dom;
    if (prevNode.__src !== this.__src) {
      img.setAttribute('src', this.__src);
    }
    if (prevNode.__alt !== this.__alt) {
      img.setAttribute('alt', this.__alt);
    }
    return false;
  }

  static importJSON(serializedNode) {
    const { src, alt } = serializedNode;
    return $createImageNode(src, alt);
  }

  exportJSON() {
    return {
      src: this.__src,
      alt: this.__alt,
      type: 'image',
      version: 1,
    };
  }
}

export function $createImageNode(src, alt) {
  return $applyNodeReplacement(new ImageNode(src, alt));
}

export function $isImageNode(node) {
  return node instanceof ImageNode;
}