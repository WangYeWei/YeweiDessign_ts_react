import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import { StepContext } from './Steps'
import KIcon from "../icon";



export interface StepProps {
  className?: string,
  style?: CSSProperties,
  title?: ReactNode,
  subTitle?: ReactNode,
  description?: ReactNode
  dot?: boolean,
  index?: number,
}

const KStep: FC<StepProps> = props => {
  const { current } = useContext(StepContext)
  const { title, subTitle, className, style, description, dot, index, ...restProps } = props
  const prefixCls = getPrefixCls('step')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-finised`]: current > index,
      [`${prefixCls}-current`]: current === index
    },
    className
  )

  const dotInnerCls = classNames(
    `${prefixCls}-dot-inner`,
    {
      [`${prefixCls}-dot-inner-finnised`]: current > index
    }
  )
  return (
    <>
      <div className={cname} style={{ ...style }} {...restProps}>
        <div className={`${prefixCls}-tag`}>
          <span className={`${prefixCls}-tag-inner`}>
            {
              current > index ?
                <KIcon icon="check" /> :
                <span>{index}</span>
            }
          </span>
        </div>
        <div className={`${prefixCls}-content`}>
          {title &&
            <span className={`${prefixCls}-title`}>
              {title}
              {subTitle &&
                <span className={`${prefixCls}-subtitle`}>
                  {subTitle}
                </span>}
            </span>}

          {description && <span className={`${prefixCls}-description`}>{description}</span>}
        </div>
      </div>
      {dot && <div className={`${prefixCls}-dot`}>
        <div className={dotInnerCls}></div>
      </div>}
    </>
  )
}

export default KStep