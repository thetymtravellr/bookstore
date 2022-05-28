
import {
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";

function CustomSideLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className={`hover:bg-purple-600 w-full h-12 grid place-content-center rounded duration-500 ${match ? 'bg-red-500' : ''}`}>
        <Link
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

  export default CustomSideLink;