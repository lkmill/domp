import createOne from 'dom-create-one';
import offset from 'dom-offset';
import scrollTo from 'dom-scroll-to';

export default function scrollIntoView(el, duration = 0, relative = 0) {
  if (typeof el === 'string') el = createOne(el);

  const coordY = offset(el).top - relative;

  scrollTo(0, coordY, duration);
}
