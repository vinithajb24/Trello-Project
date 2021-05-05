import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import OutsideClickHandler from "./OutsideClickHandler";
import { CardContainer } from "../styles/Card.styles";
import * as UtilsHelper from "../helpers/utils";
import ContentEditable from "./ContentEditable";
import IconButton from "./IconButton";
// import ModalApp from "./Modal/ModalApp";
import useModal from "./Modal/useModal";
import { Link } from "react-router-dom";

const Card = ({
  card,
  index,
  onChangeCardContent,
  onRemoveCard,
  onDuplicateCard,
  onClickCard,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (editMode) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editMode]);

  const [cardContent, setCardContent] = useState(card.content);
  const { show, RenderModal } = useModal();

  useEffect(() => {
    setCardContent(card.content);
  }, [card.content]);

  const onClickOutside = () => {
    setEditMode(false);
    onChangeCardContent(cardContent);
  };

  const onClickSaveEdit = () => {
    if (editMode) {
      onChangeCardContent(cardContent);
    }
    setEditMode((iseditMode) => !iseditMode);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.stopPropagation();
      e.preventDefault();
      setEditMode(false);
      ref.current.blur();
      const name = ref.current.innerText;
      onChangeCardContent(name);
    }
  };

  return (
    <OutsideClickHandler
      shouldListenClick={editMode}
      onClickOutside={onClickOutside}
    >
      <Draggable key={card.id} draggableId={card.id} index={index}>
        {(provided) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            {(true || editMode) && (
              <IconButton.ButtonContainer
                right={!editMode ? "42px" : undefined}
              >
                <IconButton
                  onClick={onClickSaveEdit}
                  iconType={editMode ? "confirm" : "edit"}
                />
              </IconButton.ButtonContainer>
            )}
            {true && !editMode && (
              <>
                <IconButton.ButtonContainer right="22px">
                  <IconButton onClick={onDuplicateCard} iconType="copy" />
                </IconButton.ButtonContainer>
                <IconButton.ButtonContainer>
                  <IconButton onClick={onRemoveCard} iconType="delete" />
                </IconButton.ButtonContainer>
              </>
            )}
            {true && !editMode && (
              <>
                <IconButton.ButtonContainer right="62px">
                  <IconButton onClick={show} iconType="click"></IconButton>
                </IconButton.ButtonContainer>
              </>
            )}

            <ContentEditable
              innerRef={ref}
              disabled={!editMode}
              html={cardContent}
              onChange={(e) => setCardContent(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </CardContainer>
        )}
      </Draggable>
      {
        <div>
          <div>
            <RenderModal>
              <p className="modal_para">Creating a Trello project Document</p>
              <p className="modal_para">Description</p>
              <textarea
                placeholder="Add a more Detaild Description"
                rows={5}
                cols={30}
              />
              <p className="modal_para1">ACTIONS</p>
              <Link class="button-link">Share</Link>
            </RenderModal>
          </div>
          <div id="modal-root" />
        </div>
      }
    </OutsideClickHandler>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onChangeCardContent: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
  onClickCard: PropTypes.func,
};
export default Card;
