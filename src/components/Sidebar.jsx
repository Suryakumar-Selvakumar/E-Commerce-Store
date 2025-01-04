// libs
import { Component } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: white;
`;

const NavIcon = styled.div`
  padding: 0.5rem;
  background-color: rgb(32, 32, 32);
  border-radius: 10px;
  transition: all 500ms ease;

  svg {
    width: 20px;
    fill: #ffffff;
  }
`;

const NavButton = styled(NavLink)`
  display: flex;
  gap: 0.75rem;
  text-decoration: none;
  color: white;
  align-items: center;

  &:hover > ${NavIcon} {
    background-color: white;
  }

  &:hover {
    svg {
      fill: black;
    }
  }
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledSidebar>
        <Category>
          <h2>Your Games</h2>
          <NavButton>
            <NavIcon>
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V0H5C6.65685 0 8 1.34315 8 3C8 1.34315 9.34315 0 11 0H13V3H16V6H0V3H3Z" />
                <path d="M1 8H7V15H1V8Z" />
                <path d="M15 8H9V15H15V8Z" />
              </svg>
            </NavIcon>
            <span>Wishlist</span>
          </NavButton>
        </Category>
        <Category>
          <h2>New Releases</h2>
          <NavButton>
            <NavIcon>
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z" />
                </g>
              </svg>
            </NavIcon>
            <span>Last 30 days</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 26 26">
                <path d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z" />
              </svg>
            </NavIcon>
            <span>This week</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                <path d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z" />
              </svg>
            </NavIcon>
            <span>Next week</span>
          </NavButton>
        </Category>
        <Category>
          <h2>Top</h2>
          <NavButton>
            <NavIcon>
              <svg
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <style type="text/css"> </style>
                  <g>
                    <path d="M102.49,0c0,27.414,0,104.166,0,137.062c0,112.391,99.33,156.25,153.51,156.25 c54.18,0,153.51-43.859,153.51-156.25c0-32.896,0-109.648,0-137.062H102.49z M256.289,50.551l-68.164,29.768v98.474l-0.049,19.53 c-0.526-0.112-47.274-10.112-47.274-78.391c0-28.17,0-69.6,0-69.6h60.385L256.289,50.551z" />{" "}
                    <polygon points="315.473,400.717 291.681,367.482 279.791,318.506 256,322.004 232.209,318.506 220.314,367.482 205.347,388.394 196.527,400.476 196.699,400.476 196.527,400.717 " />{" "}
                    <polygon points="366.93,432.24 366.93,432 145.07,432 145.07,511.598 145.07,511.76 145.07,511.76 145.07,512 366.93,512 366.93,432.402 366.93,432.24 " />
                    <path d="M511.638,96.668c-0.033-1.268-0.068-2.336-0.068-3.174V45.1h-73.889v38.736h35.152v9.658 c0,1.127,0.037,2.557,0.086,4.258c0.389,13.976,1.303,46.707-21.545,70.203c-5.121,5.266-11.221,9.787-18.219,13.613 c-3.883,17.635-10.109,33.564-18.104,47.814c26.561-6.406,48.026-17.898,64.096-34.422 C513.402,159.734,512.121,113.918,511.638,96.668z" />
                    <path d="M60.625,167.955c-22.848-23.496-21.934-56.227-21.541-70.203c0.047-1.701,0.082-3.131,0.082-4.258v-9.658 h34.842h0.07l0,0h0.24V45.1H0.43v48.394c0,0.838-0.032,1.906-0.068,3.174c-0.482,17.25-1.76,63.066,32.494,98.293 c16.068,16.524,37.531,28.014,64.092,34.422c-7.996-14.25-14.22-30.182-18.103-47.816C71.846,177.74,65.746,173.221,60.625,167.955 z" />
                  </g>
                </g>
              </svg>
            </NavIcon>
            <span>Best of the year</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path d="M405.333333 469.333333h213.333334v426.666667H405.333333zM128 256h213.333333v640H128zM682.666667 128h213.333333v768H682.666667z" />
                </g>
              </svg>
            </NavIcon>
            <span>Popular in 2026</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.2"
                baseProfile="tiny"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 240.5"
                xmlSpace="preserve"
              >
                <path
                  d="M41.316,196.312h173.36v30.237H41.316V196.312z M235.842,59.236c-11.133,0-20.158,9.025-20.158,20.158
	c0,3.212,0.771,6.237,2.107,8.932l-41.834,20.702l-37.704-63.706c5.92-3.512,9.901-9.949,9.901-17.331
	c0-11.133-9.025-20.158-20.158-20.158s-20.158,9.025-20.158,20.158c0,7.382,3.981,13.819,9.901,17.331L80.194,108.76L39.191,88.364
	c1.348-2.704,2.125-5.743,2.125-8.97c0-11.133-9.025-20.158-20.158-20.158S1,68.262,1,79.395c0,11.133,9.025,20.158,20.158,20.158
	c1.34,0,2.646-0.137,3.913-0.387l15.237,76.987h175.375l16.046-77.023c1.328,0.275,2.702,0.422,4.112,0.422
	c11.133,0,20.158-9.025,20.158-20.158C256,68.262,246.975,59.236,235.842,59.236z"
                />
              </svg>
            </NavIcon>
            <span>All time top</span>
          </NavButton>
        </Category>
        <Category>
          <h2>Platforms</h2>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z" />
              </svg>
            </NavIcon>
            <span>PC</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
                <path d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z" />
              </svg>
            </NavIcon>
            <span>PlayStation</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z" />
              </svg>
            </NavIcon>
            <span>Xbox</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
                <path d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z" />
              </svg>
            </NavIcon>
            <span>Nintendo Switch</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
            </NavIcon>
            <span>iOS</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                <path d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z" />
              </svg>
            </NavIcon>
            <span>Android</span>
          </NavButton>
        </Category>
        <Category>
          <h2>Genres</h2>
          <NavButton>
            <NavIcon>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fillRule="nonzero"
                    d="M9.5 11l.144.007a1.5 1.5 0 0 1 1.35 1.349L11 12.5l-.007.144a1.5 1.5 0 0 1-1.349 1.35L9.5 14H6v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19 13c.711 0 1.388-.149 2-.416V17a3.001 3.001 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3.001 3.001 0 0 1 3 17v-4a2 2 0 0 1 2-2h4.5zM22 7.5V8l-.005.176a3 3 0 0 1-2.819 2.819L19 11h-6.337a3.501 3.501 0 0 0-2.955-1.994L9.5 9H5c-.729 0-1.412.195-2.001.536L3 6a4 4 0 0 1 4-4h9.5A5.5 5.5 0 0 1 22 7.5z"
                  />
                </g>
              </svg>
            </NavIcon>
            <span>Action</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 296.999 296.999"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M226.983,260.96c-1.498-4.201-5.476-7.007-9.936-7.007H57.231c-5.099,0-9.468,3.648-10.378,8.666l-4.773,26.333
				c-0.218,1.204-0.173,2.458,0.247,3.607c1.005,2.749,3.556,4.44,6.306,4.44h181.553c1.363,0,2.726-0.345,3.854-1.109
				c2.648-1.794,3.598-5.022,2.599-7.826L226.983,260.96z"
                      />
                      <path
                        d="M253.923,113.07L202.42,35.815l9.914-26.804c0.873-2.361,0.347-5.013-1.362-6.861c-1.71-1.851-4.314-2.584-6.733-1.896
				l-48.56,13.733c-4.755-0.085-22.575,0.281-42.344,9.337c-20.892,9.57-47.981,30.99-58.39,78.68
				c-14.367,65.826-0.383,116.08,8.295,138.569h137.528l12.276-12.276c2.226-2.227,2.598-5.703,0.895-8.351
				c-11.321-17.596-38.038-61.909-48.365-89.48c3.783,1.293,8.071,2.127,12.604,1.89c6.445-0.337,12.327-2.696,17.551-7.028
				l18.855,12.571c5.825,3.884,13.047,5.081,19.815,3.284s12.445-6.42,15.577-12.683l4.365-8.729
				C255.415,117.625,255.255,115.067,253.923,113.07z M181.616,70.076h-9.094c-3.695,0-6.689-2.995-6.689-6.689
				c0-3.695,2.995-6.689,6.689-6.689h9.094c3.695,0,6.689,2.995,6.689,6.689C188.305,67.082,185.311,70.076,181.616,70.076z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </NavIcon>
            <span>Strategy</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 332.441 332.44"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <g id="Layer_5_34_">
                      <g>
                        <g>
                          <path
                            d="M260.777,217.262l-49.705,49.705c-0.658,0.658-0.658,1.738,0,2.398l14.825,14.824c0.658,0.656,1.738,0.656,2.396,0
						l7.603-7.604c0.657-0.656,1.735-0.656,2.395,0.002l40.512,40.508c20.321,20.324,21.556,19.092,36.378,4.271
						c14.821-14.822,16.057-16.057-4.269-36.379l-40.51-40.512c-0.658-0.656-0.661-1.732-0.003-2.393l7.601-7.602
						c0.661-0.66,0.657-1.736,0-2.396l-14.824-14.828C262.513,216.604,261.436,216.604,260.777,217.262z M298.662,290.619
						l-14.239,14.242c-1.842,1.84-4.826,1.84-6.666,0c-1.841-1.844-1.841-4.826,0-6.668l14.24-14.24c1.842-1.84,4.825-1.842,6.666,0
						C300.503,285.793,300.503,288.778,298.662,290.619z M278.169,270.127l-14.24,14.242c-1.84,1.84-4.824,1.84-6.665,0
						c-1.84-1.84-1.841-4.826-0.001-6.666l14.242-14.24c1.84-1.842,4.824-1.842,6.664-0.002
						C280.012,265.303,280.012,268.287,278.169,270.127z"
                          />
                          <g>
                            <path
                              d="M205.74,189.598c-10.196,8.846-19.131,16.229-28.599,23.863c-0.467,0.377-1.216,1.322-0.272,2.021
							c16.28,12.842,28.107,21.561,33.939,25.824c2.174,1.594,3.363,2.434,4.822,0.977c4.895-4.896,14.315-14.318,19.578-19.58
							c1.463-1.461,1.084-2.674-0.316-4.188c-4.26-4.602-14.407-15.562-26.838-28.982
							C207.724,189.174,207.05,188.471,205.74,189.598z"
                            />
                            <path
                              d="M125.765,170.701c10.861-11.724,20.655-22.288,31.522-33.999c0.535-0.711,0.053-1.865-0.364-2.314
							c-8.375-9.016-15.716-16.908-20.923-22.48C110.686,84.803,45.448,2.472,45.448,2.472s-4.549-6.025-6.226,0.736
							c-2.779,11.213-7.844,37.059,4.221,72.381c9.189,26.9,43.862,63.051,79.581,94.941
							C123.553,171.004,124.738,171.576,125.765,170.701z"
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            d="M293.214,3.209c-1.677-6.762-6.227-0.736-6.227-0.736s-65.236,82.33-90.552,109.436
						c-22.774,24.381-86.349,93.055-98.892,106.606c-1.401,1.516-1.778,2.729-0.317,4.188c5.262,5.262,14.685,14.684,19.579,19.58
						c1.458,1.457,2.65,0.617,4.823-0.977c22.286-16.305,148.499-110.501,167.362-165.719
						C301.058,40.268,295.994,14.422,293.214,3.209z"
                          />
                          <path
                            d="M69.266,217.262L54.439,232.09c-0.658,0.658-0.659,1.734,0,2.396l7.601,7.602c0.659,0.658,0.656,1.734-0.002,2.394
						l-40.509,40.511c-20.324,20.324-19.09,21.557-4.268,36.379c14.822,14.821,16.054,16.055,36.378-4.271l40.509-40.508
						c0.659-0.658,1.737-0.658,2.395-0.002l7.602,7.604c0.657,0.656,1.737,0.656,2.396,0l14.826-14.824
						c0.659-0.66,0.658-1.74,0-2.398l-49.706-49.705C71.004,216.604,69.924,216.604,69.266,217.262z M33.775,283.953
						c1.841-1.842,4.826-1.84,6.667,0l14.241,14.24c1.84,1.842,1.84,4.824,0,6.668c-1.841,1.84-4.826,1.84-6.666,0l-14.241-14.242
						C31.936,288.778,31.935,285.793,33.775,283.953z M54.268,263.461c1.84-1.84,4.826-1.84,6.667,0.002l14.241,14.24
						c1.841,1.84,1.84,4.826,0,6.666c-1.84,1.84-4.825,1.84-6.666,0l-14.241-14.242C52.427,268.287,52.426,265.303,54.268,263.461z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </NavIcon>
            <span>RPG</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 307.296 307.296"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M301.395,84.292V62.356h-1.267v-7.789h-13.913v7.789c-18.645,0.022-137.869,0.152-195.067,0.196
			l-7.555-15.637l-14.729-3.927v19.575h-1.485c-8.093,0-24.465,8.55-32.857,24.03c-5.417,9.997-9.105,26.184,4.096,46.493
			l3.628,5.559l0.908-6.576c0.218-1.55,0.8-3.35,1.284-4.063c0.49,0.381,1.626,1.539,3.345,4.873
			c0.044,0.098,4.324,9.698-14.604,33.064C12.646,191.289,0.555,255.802,0,258.973v5.336h82.222v-7.228
			c14.658-16.459,23.616-48.712,28.724-74.711c1.664,0.299,3.323,0.441,4.944,0.441h24.476c16.089,0,37.66-16.709,37.66-33.804
			c0-5.194-1.376-10.312-3.943-14.8h127.301v-21.941h5.912V84.286h-5.901V84.292z M140.371,177.855h-24.476
			c-1.479,0-3.024-0.207-4.558-0.506l4.172-25.101c3.932,7.849,9.556,13.26,16.861,16.111c0.995,0.381,2.051,0.577,3.133,0.577
			c3.535,0,6.772-2.208,8.05-5.515c1.724-4.444-0.49-9.464-4.922-11.215c-7.364-2.839-11.95-11.248-13.734-18.205h43.067
			c3.296,4.368,5.102,9.518,5.102,15.001C173.066,162.935,153.882,177.855,140.371,177.855z"
                    />
                  </g>
                </g>
              </svg>
            </NavIcon>
            <span>Shooter</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512.002 512.002"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M276.502,27.81c-4.051-7.562-11.935-12.281-20.515-12.281c-8.579,0-16.462,4.719-20.514,12.281l-81.861,152.808
			c0.182,0.143,0.372,0.273,0.549,0.42l17.699,14.794l18.235,15.243l8.427,7.045l49.444-18.208
			c5.193-1.911,10.896-1.91,16.088,0.003l49.402,18.204l8.424-7.036l18.24-15.235l17.741-14.818c0.164-0.14,0.344-0.258,0.512-0.391
			L276.502,27.81z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M508.654,461.168L380.802,222.513l-18.239,15.235l-18.24,15.232l-11.363,9.492c-6.39,5.339-15.153,6.856-22.966,3.976
			l-53.991-19.894l-54.035,19.896c-2.616,0.963-5.337,1.434-8.039,1.435c-5.376,0-10.675-1.862-14.928-5.416l-11.353-9.492
			l-18.235-15.243l-18.234-15.243L2.759,462.211c-3.863,7.211-3.658,15.924,0.546,22.944c4.204,7.02,11.785,11.318,19.967,11.318
			h465.428c0.012,0,0.023,0,0.031,0c12.854,0,23.271-10.421,23.271-23.271C512,468.797,510.778,464.681,508.654,461.168z"
                    />
                  </g>
                </g>
              </svg>
            </NavIcon>
            <span>Adventure</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 206.185 206.185"
                xmlSpace="preserve"
              >
                <path
                  d="M168.395,92.03c-3.313,0-6.574,0.492-9.687,1.44V51.833c0-4.142-3.357-7.5-7.5-7.5h-38.232
	c1.241-3.513,1.888-7.253,1.888-11.104C114.864,14.906,99.958,0,81.635,0S48.405,14.906,48.405,33.229
	c0,3.851,0.646,7.592,1.888,11.104H12.061c-4.143,0-7.5,3.358-7.5,7.5v49.721c0,2.515,1.261,4.863,3.357,6.252
	c2.097,1.389,4.75,1.636,7.066,0.654c2.243-0.95,4.631-1.431,7.097-1.431c10.052,0,18.23,8.178,18.23,18.229
	c0,10.051-8.178,18.229-18.23,18.229c-2.466,0-4.853-0.481-7.097-1.431c-2.316-0.982-4.97-0.735-7.066,0.654
	c-2.097,1.389-3.357,3.737-3.357,6.252v49.721c0,4.142,3.357,7.5,7.5,7.5h45.687c0.007,0.001,0.015,0,0.02,0
	c4.143,0,7.5-3.358,7.5-7.5c0-1.152-0.259-2.243-0.724-3.219c-0.756-2.032-1.139-4.163-1.139-6.341
	c0-10.052,8.178-18.229,18.229-18.229s18.229,8.178,18.229,18.229c0,2.332-0.439,4.609-1.305,6.77
	c-0.926,2.311-0.645,4.931,0.75,6.993c1.396,2.062,3.723,3.297,6.212,3.297h45.687c4.143,0,7.5-3.358,7.5-7.5v-41.636
	c3.112,0.948,6.373,1.44,9.687,1.44c18.322,0,33.229-14.906,33.229-33.229S186.718,92.03,168.395,92.03z"
                />
              </svg>
            </NavIcon>
            <span>Puzzle</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1280.000000 1228.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1228.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M10249 12163 c-503 -432 -1098 -737 -1889 -968 -186 -54 -554 -148
-707 -181 -58 -12 -83 -21 -83 -31 0 -8 131 -499 291 -1091 159 -593 299
-1111 310 -1152 41 -153 35 -143 88 -135 132 19 411 95 643 174 223 76 289
103 285 115 -2 6 -163 445 -357 975 -280 767 -350 965 -339 972 8 5 32 14 54
19 103 27 455 147 590 200 300 120 650 307 933 499 67 46 127 81 134 79 15 -5
740 -1807 731 -1820 -11 -19 -326 -249 -468 -343 -344 -228 -683 -398 -1080
-542 -82 -30 -154 -58 -158 -63 -8 -7 746 -2114 762 -2133 9 -10 406 187 603
299 367 208 700 452 1002 733 60 56 114 100 119 98 6 -2 34 -64 63 -138 29
-73 177 -448 328 -833 152 -384 276 -706 276 -715 0 -35 -180 -237 -364 -410
-308 -288 -812 -643 -1231 -867 -105 -56 -129 -63 -138 -41 -2 6 -152 419
-332 917 -181 498 -331 909 -335 913 -4 5 -43 -9 -86 -31 -200 -100 -575 -249
-859 -341 -206 -67 -204 -67 -231 -11 -11 25 -585 1314 -1274 2865 -689 1551
-1259 2827 -1267 2835 -12 13 -81 15 -501 15 -480 0 -565 -4 -927 -41 -720
-74 -1443 -259 -2085 -534 -548 -234 -1101 -573 -1539 -941 -68 -57 -136 -113
-149 -125 -17 -14 -23 -27 -20 -40 3 -10 232 -593 508 -1294 276 -701 609
-1547 740 -1880 131 -333 531 -1350 890 -2260 358 -910 710 -1805 782 -1988
72 -182 134 -332 138 -332 4 0 40 40 79 89 287 364 788 857 1271 1252 971 792
2134 1489 2903 1738 201 65 343 92 477 93 170 0 258 -40 306 -139 25 -50 26
-61 21 -146 -10 -175 -117 -401 -325 -686 -176 -242 -477 -579 -498 -558 -2 1
38 70 87 152 254 424 326 688 216 792 -42 39 -85 53 -166 53 -308 0 -925 -340
-1343 -739 -42 -40 -68 -72 -68 -85 0 -12 18 -52 40 -90 168 -288 438 -456
845 -527 167 -29 507 -32 710 -5 791 102 1695 440 2560 959 722 432 1307 942
1544 1345 l31 53 -74 187 c-395 997 -575 1452 -1106 2792 -337 850 -754 1903
-927 2340 -173 437 -316 796 -317 798 -2 1 -54 -42 -117 -95z m-3842 -1347
c211 -457 379 -834 375 -838 -5 -5 -96 -18 -203 -29 -709 -72 -1379 -225
-2017 -460 -53 -20 -63 -27 -59 -44 8 -42 1002 -2325 1012 -2325 6 0 98 35
205 79 421 169 887 324 1285 426 337 87 725 159 745 139 17 -17 740 -1649 736
-1660 -2 -6 -41 -21 -86 -33 -490 -133 -1233 -498 -1889 -929 -120 -79 -145
-92 -156 -81 -7 8 -201 462 -430 1009 -229 547 -420 999 -425 1004 -15 15
-539 -259 -904 -472 -489 -284 -853 -535 -1297 -891 -21 -17 -33 -21 -40 -14
-12 12 -959 2469 -959 2489 0 16 377 299 580 436 420 281 936 562 1439 783 73
33 135 64 138 71 2 6 -165 435 -372 953 -208 518 -375 947 -372 955 10 26 398
128 647 170 391 66 782 93 1364 92 l300 -1 383 -829z"
                  />
                  <path
                    d="M282 10350 c-145 -65 -265 -120 -267 -122 -1 -1 192 -559 430 -1238
421 -1202 1266 -3614 2520 -7195 339 -968 620 -1764 625 -1769 9 -9 926 349
935 365 3 3 -42 125 -99 270 -58 145 -398 1011 -756 1924 -644 1639 -1479
3766 -2370 6035 -251 641 -517 1319 -591 1507 -95 242 -138 343 -149 342 -8 0
-133 -54 -278 -119z"
                  />
                </g>
              </svg>
            </NavIcon>
            <span>Racing</span>
          </NavButton>
          <NavButton>
            <NavIcon>
              <svg viewBox="-8 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M481.5 60.3c-4.8-18.2-19.1-32.5-37.3-37.4C420.3 16.5 383 8.9 339.4 8L496 164.8c-.8-43.5-8.2-80.6-14.5-104.5zm-467 391.4c4.8 18.2 19.1 32.5 37.3 37.4 23.9 6.4 61.2 14 104.8 14.9L0 347.2c.8 43.5 8.2 80.6 14.5 104.5zM4.2 283.4L220.4 500c132.5-19.4 248.8-118.7 271.5-271.4L275.6 12C143.1 31.4 26.8 130.7 4.2 283.4zm317.3-123.6c3.1-3.1 8.2-3.1 11.3 0l11.3 11.3c3.1 3.1 3.1 8.2 0 11.3l-28.3 28.3 28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-28.3-28.3-22.6 22.7 28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L248 278.6l-22.6 22.6 28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-28.3-28.3-28.3 28.3c-3.1 3.1-8.2 3.1-11.3 0l-11.3-11.3c-3.1-3.1-3.1-8.2 0-11.3l28.3-28.3-28.3-28.2c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3 22.6-22.6-28.3-28.3c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3 22.6-22.6-28.3-28.3c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3 28.3-28.5z" />
              </svg>
            </NavIcon>
            <span>Sports</span>
          </NavButton>
        </Category>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
