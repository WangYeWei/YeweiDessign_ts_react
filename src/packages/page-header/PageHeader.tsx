import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode } from "react";
import KIcon, { IconProps } from "../icon";


interface PageHeaderHeadProps {
  prefixCls?: string,
  backIcon?: IconProps['icon']
  title?: ReactNode,
  subTitle?: ReactNode,
  onBack?: () => void;
}

export interface PageHeaderProps extends PageHeaderHeadProps {
  className?: string,
  style?: CSSProperties,
}

const headderRender = ({
  prefixCls,
  backIcon,
  title,
  subTitle,
  onBack
}: PageHeaderHeadProps): ReactNode => {

  const innerCls: string = prefixCls + '-header'

  return (
    <div className={innerCls}>
      <KIcon icon={backIcon} className={`${innerCls}-icon`} onClick={() => {
        onBack && onBack()
      }} />
      {title && <div className={`${innerCls}-title`}>{title}</div>}
      {subTitle && <div className={`${innerCls}-sub-title`}>{subTitle}</div>}
    </div>
  )
}

const KPageHeader: FC<PageHeaderProps> = props => {

  const {
    className,
    style,
    backIcon = 'arrow-left',
    title,
    subTitle,
    onBack,
    ...restProps
  } = props

  const prefixCls = getPrefixCls('page-header')

  const cnames = classNames(
    prefixCls,
    className
  )
  return (
    <div className={cnames} style={{ ...style }} {...restProps}>
      {headderRender({ prefixCls, backIcon, title, subTitle, onBack })}
    </div>
  )
}

export default KPageHeader