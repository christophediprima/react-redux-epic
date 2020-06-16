import { render as _render, unmountComponentAtNode } from 'react-dom';
import { Observable } from 'rxjs';

// render(
//   element: ReactElement,
//   container: DOMElement,
// ) => Observable[RootInstance]

export default function render(element, container) {
  return new Observable(observer => {
    try {
      _render(element, container, function() {
        observer.next();
      });
    } catch (err) {
      return observer.error(err);
    }

    return () => unmountComponentAtNode(container);
  });
}
