'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NetworkIcon } from '@/ui/icons/NavigationIcons';
import { CheckIcon } from '@/ui/icons/ActionIcons';
import { StarIcon } from '@/ui/icons/StatusIcons';
import { Share2Icon } from '@/ui/icons/SocialIcons';

interface ActionButtonProps {
  variant: 'favorite' | 'connections' | 'graph' | 'share' | 'link';
  is_active?: boolean;
  onClick?: () => void | Promise<void>;
  href?: string;
  className?: string;
  showLabel?: boolean;
  disabled?: boolean;
}

export function ActionButton({
  variant,
  is_active = false,
  onClick,
  href,
  className = '',
  showLabel = false,
  disabled = false,
}: ActionButtonProps) {
  const [copied, setCopied] = useState(false);
  const [validating, setValidating] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent any default behavior
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;

    setValidating(true);

    if (variant === 'link') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setValidating(false);
      }, 2000);
    } else {
      // Execute the onClick (might be async for favorite action)
      if (onClick) {
        await onClick();
      }
      // Show validation state for 2 seconds
      setTimeout(() => {
        setValidating(false);
      }, 2000);
    }
  };

  const icons = {
    favorite: StarIcon,
    connections: NetworkIcon,
    graph: NetworkIcon,
    share: Share2Icon,
    link: Share2Icon,
  };

  const labels = {
    favorite: is_active ? 'Favori' : validating ? 'Ajouté...' : 'Favoriser',
    connections: 'Connexions',
    graph: 'Graphe',
    share: 'Partager',
    link: copied ? 'Copié !' : 'Lien',
  };

  const arialLabels = {
    favorite: is_active ? 'Retirer des favoris' : 'Ajouter aux favoris',
    connections: 'Voir les connexions',
    graph: 'Voir le graphe',
    share: 'Partager',
    link: copied ? 'Lien copié' : 'Copier le lien',
  };

  const Icon = icons[variant];

  // Style based on state
  const getButtonStyle = () => {
    if (disabled) {
      return 'bg-paper-100 border-paper-200 text-ink-light opacity-50 cursor-not-allowed';
    }
    if (variant === 'link' && copied) {
      return 'bg-green-100 border-green-600 text-green-700';
    }
    if (validating && variant === 'favorite') {
      return 'bg-green-100 border-green-600 text-green-700';
    }
    if (is_active && !validating && variant === 'favorite') {
      return 'bg-amber-100 border-amber-500 text-amber-700';
    }
    return 'bg-paper-50 border-paper-300 text-ink-light hover:border-sepia-600 hover:bg-paper-100';
  };

  const buttonContent = (
    <>
      <Icon
        className={`w-5 h-5 ${
          variant === 'link' && copied ? 'text-green-600' : ''
        } ${variant === 'favorite' && is_active ? 'fill-current' : ''}`}
        aria-hidden="true"
      />
      {showLabel && <span className="text-sm font-medium">{labels[variant]}</span>}
      {(copied || validating) && variant !== 'favorite' && (
        <CheckIcon className="w-4 h-4 text-green-600 animate-pulse" aria-hidden="true" />
      )}
    </>
  );

  const baseClasses = `
    flex items-center gap-2 px-3 py-2 border-2 transition-all duration-200
    ${getButtonStyle()}
    ${className}
  `;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={arialLabels[variant]}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={baseClasses}
      aria-label={arialLabels[variant]}
      aria-pressed={variant === 'favorite' ? is_active : undefined}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}

interface ActionButtonsProps {
  isFavorite?: boolean;
  isToggling?: boolean;
  onFavorite?: () => void | Promise<void>;
  connectionsHref?: string;
  graphHref?: string;
  onShare?: () => void;
  showLabels?: boolean;
}

export function ActionButtons({
  isFavorite = false,
  isToggling = false,
  onFavorite,
  connectionsHref,
  graphHref,
  onShare,
  showLabels = false,
}: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      <ActionButton
        variant="favorite"
        is_active={isFavorite}
        onClick={onFavorite}
        disabled={isToggling}
        showLabel={showLabels}
      />
      {connectionsHref && (
        <ActionButton
          variant="connections"
          href={connectionsHref}
          showLabel={showLabels}
        />
      )}
      {graphHref && (
        <ActionButton
          variant="graph"
          href={graphHref}
          showLabel={showLabels}
        />
      )}
      <ActionButton
        variant="link"
        showLabel={showLabels}
      />
    </div>
  );
}
